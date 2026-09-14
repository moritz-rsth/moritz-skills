// Viewport-fit and navigation check for a built deck.
//
//   npm i playwright && npx playwright install chromium   (once)
//   node validate.js <deck.html> <screenshot-dir>
//
// For every slide at six viewport sizes it reports the element that sticks out
// furthest below the bottom bar or beyond the slide's sides, and screenshots
// the 1920x1080 / 1280x720 / 375x667 / 667x375 runs so they can be eyeballed.
// Then it drives the deck with the keyboard and a pill click and prints the
// page number and active pill after each step. Exit code 1 on any overflow.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const deck = 'file://' + path.resolve(process.argv[2]);
const shots = process.argv[3] || 'shots';
fs.mkdirSync(shots, { recursive: true });

const sizes = [[1920, 1080], [1440, 900], [1280, 720], [768, 1024], [375, 667], [667, 375]];
const screenshotAt = new Set([1920, 1280, 375, 667]);

(async () => {
  const browser = await chromium.launch();
  let problems = 0;
  for (const [w, h] of sizes) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.goto(deck);
    // Reveal everything and disable smooth scrolling so measurements are stable.
    await page.addStyleTag({ content: 'html,body{scroll-behavior:auto!important} .reveal{opacity:1!important;transform:none!important;transition:none!important}' });
    await page.waitForTimeout(300);
    const n = await page.$$eval('.slide', s => s.length);
    for (let i = 0; i < n; i++) {
      await page.evaluate(i => document.querySelectorAll('.slide')[i].scrollIntoView({ block: 'start', behavior: 'instant' }), i);
      await page.waitForTimeout(500);
      const r = await page.evaluate(i => {
        const slide = document.querySelectorAll('.slide')[i];
        const sr = slide.getBoundingClientRect();
        const barH = document.querySelector('.bar').getBoundingClientRect().height;
        const limitBottom = sr.top + sr.height - barH + 1;
        let worst = null;
        slide.querySelectorAll('.slide-content *').forEach(el => {
          const b = el.getBoundingClientRect();
          if (b.height === 0 || b.width === 0) return;
          const over = b.bottom - limitBottom;
          const overX = Math.max(b.right - (sr.left + sr.width) - 1, sr.left - b.left - 1);
          const score = Math.max(over, overX);
          if (score > 0 && (!worst || score > worst.score)) {
            worst = { score: Math.round(score), tag: el.tagName, cls: el.className, text: (el.textContent || '').trim().slice(0, 40) };
          }
        });
        return { worst, docOverflowX: document.documentElement.scrollWidth > window.innerWidth + 1, label: slide.getAttribute('aria-label') };
      }, i);
      if (r.worst || r.docOverflowX) {
        problems++;
        console.log(`${w}x${h} slide ${i + 1} (${r.label}): overflow ${JSON.stringify(r.worst)} docX=${r.docOverflowX}`);
      }
      if (screenshotAt.has(w)) {
        await page.screenshot({ path: `${shots}/${w}x${h}_${String(i + 1).padStart(2, '0')}.png` });
      }
    }
    await page.close();
  }

  // Keyboard navigation + pill state.
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(deck);
  await page.waitForTimeout(400);
  const state = () => page.evaluate(() => ({
    page: document.getElementById('pageCur').textContent,
    pill: document.querySelector('.sections button.active .label').textContent,
  }));
  const seen = [];
  for (let k = 0; k < 3; k++) { await page.keyboard.press('ArrowDown'); await page.waitForTimeout(900); seen.push(await state()); }
  await page.keyboard.press('End'); await page.waitForTimeout(1200); seen.push(await state());
  await page.click('.sections li:nth-child(2) button'); await page.waitForTimeout(1200); seen.push(await state());
  console.log('nav:', JSON.stringify(seen));
  await browser.close();
  console.log(problems ? `${problems} overflow problem(s)` : 'no overflow');
  process.exit(problems ? 1 : 0);
})();
