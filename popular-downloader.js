const path = require('path');
const fs = require('fs');
const requestPromise = require('request-promise');

let downloadDirectory = path.join(__dirname, 'downloads/');

const validMediaTypes = ['.jpg', '.jpeg', '.gif', '.gifv', '.png', '.mp4', '.bmp']

requestPromise('https://reddit.com/r/popular.json')
    .then(data => {

        const articles = JSON.parse(data).data.children;

        articles.forEach(article => {
            if (article.data.url_overridden_by_dest) {
                const id = article.data.id;
                const url = article.data.url_overridden_by_dest;
                const extension = path.extname(url);

                if (validMediaTypes.includes(extension)) {
                    const fileName = id + extension;
                    const file = path.join(downloadDirectory, fileName);
                    const fileStream = fs.createWriteStream(file);

                    requestPromise(url).pipe(fileStream);

                    fileStream.close();
                }
            }
        });
    })