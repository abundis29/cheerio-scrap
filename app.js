const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

// Async function which scrapes the data
const count = {}
async function scrapeData(url) {
    try {
        // Fetch HTML of the page we want to scrape
        const { data } = await axios.get(url);
        // Load HTML we fetched in the previous line
        const $ = cheerio.load(data);
        // Select all the list items in plainlist class
        const listItems = $(".job__tags_wrapper .job__tag");
        // Stores data for all countries       

        // Use .each method to loop through the li we selected
        listItems.each((idx, el) => {
            const name = $(el).text()
            if (count[name]) {
                count[name] += 1;
            } else {
                count[name] = 1;
            }
        });
        // Logs countries array to the console
        //   console.dir(countries);
        // 
        // Write countries array in countries.json file
        fs.writeFile("coutries.json", JSON.stringify(count, null, 2), (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log("Successfully written data to file");
        });
    } catch (err) {
        console.error(err);
    }
}
// URL of the page we want to scrape
const all = "https://relocate.me/search?page=";
const tokyo = 'https://relocate.me/search?country%5B0%5D=Japan&city%5B0%5D=Tokyo&time=any&page='

function Runner() {
    for (let a = 0; a < 4; a++) {
        scrapeData(all + a);
    }
}
try {
    Runner()
} catch (error) {
    console.log(err)
}
// // Invoke the above function
// 





// const markup = `
// <ul class="fruits">
//   <li class="fruits__mango"> Mango </li>
//   <li class="fruits__apple"> Apple </li>
// </ul>
// `;


// const $ = cheerio.load(markup);
// console.log(pretty($.html()));

// const mango = $(".fruits__mango");
// console.log(mango.html()); // Mango

// const apple = $(".fruits__apple");
// console.log(apple.attr("class")); //fruits__apple

// const listItems = $("li");
// console.log(listItems.length); // 2
// listItems.each(function (idx, el) {
//   console.log($(el).text());
// });

// const ul = $("ul");
// ul.append("<li>Banana</li>");
// ul.prepend("<li>Pineapple</li>");
// console.log(pretty($.html()));