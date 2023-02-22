const path = require('path');
const fs = require('fs');
const request = require('request');

let dataPath = path.join(__dirname, './popular-articles.json');

let articles = [];

request('https://reddit.com/r/popular.json', (err, res, body) => {

    if (err) console.log(err);

    JSON.parse(body).data.children.forEach(item => {

        articles.push({
            "title": `${item.data.title}`,
            "url": `${item.data.url}`,
            "author": `${item.data.author}`
        });
    });

    fs.writeFile(dataPath, JSON.stringify(articles), err => {
        if (err) console.log(err);
    });
})