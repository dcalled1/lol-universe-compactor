import puppeteer from 'puppeteer'

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://universe.leagueoflegends.com/en_US/story/zyra-color-story/');
    await page.waitForSelector('div#Content');
    await page.screenshot({ path: 'example.png' });

    await browser.close();
})();