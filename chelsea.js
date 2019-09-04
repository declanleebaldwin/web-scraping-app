const axios = require("axios");
const $ = require("cheerio");
const puppeteer = require("puppeteer");

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(
            "https://www.chelseafc.com/en/tickets---membership/buy-tickets?pageTab=GENERAL%20ADMISSION"
        );
        await page.waitForSelector(".td-on-sale", { timeout: 1000 });
        const bodyHandle = await page.$('body');
        const body = await page.evaluate(body => body.innerHTML, bodyHandle);
        await browser.close();
        parseBody(body);
    } catch (error) {
        console.log(error);
    }
})();

function parseBody(body) {
    var arrayOfMatchesHTML = [];
    $("cfc-match-card", body).each(function() {
        arrayOfMatchesHTML.push($(this).html());
    });
    console.log(arrayOfMatchesHTML[0]);
}
