const puppeteer = require("puppeteer");
const $ = require('cheerio');
const url = "https://reddit.com";

puppeteer
    .launch()
    .then(function(browser) {
        return browser.newPage();
    })
    .then(function(page) {
        return page.goto(url).then(function() {
            return page.content();
        });
    })
    .then(function(html) {
        $("h2", html).each(function() {
            console.log($(this).text());
        });
    })
    .catch(function(err) {
        console.log(err);
    });
