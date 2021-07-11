import puppeteer from 'puppeteer'

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://universe.leagueoflegends.com/en_US/champions/');
    await page.waitForSelector('article.championsPage_23K7 li.item_30l8');
    let urls = await page.$$eval("li.item_30l8", links => {
        return links.map(el => {
            const t = {url: el.querySelector("a")!.href, name: el.querySelector("h1")?.textContent}
            return t;
        })
    });
    console.log(urls)

    await browser.close();
})();