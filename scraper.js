const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';


rp(url)
    .then(function(html) {
        const wikiURLs = [];
        for (let i = 0; i < 45; i++) {
            wikiURLs.push($('big > a', html)[i].attribs.href)            
        }
        console.log(wikiURLs);
    })
    .catch(function(err) {
        console.log(err);
    })