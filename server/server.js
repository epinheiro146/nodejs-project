const path = require('path');
const fs = require('fs');

let chirps = [
    {
        username: 'majimaeverywhere',
        message: 'anyone up rn? lookin to rage tonight'
    },
    {
        username: 'judgmentkazzy',
        message: 'yeah buddy lemme know what building you wanna fight on top of'
    },
    {
        username: 'parttimehero_ichi',
        message: '@RealNanba @adachi2far guys, fight tonight, you gonna go?'
    },
    {
        username: 'RealNanba',
        message: '@parttimehero_ichi ichiban its 3 am'
    },
    {
        username: 'adachi2far',
        message: 'not sure How 2 use this app. LOL 😂'
    }
]

let dataPath = path.join(__dirname, '../chirps.json');

let timeline = JSON.stringify(chirps);

fs.writeFile(dataPath, timeline, err => {
    if (err) console.log(err);
});

fs.readFile(dataPath, {
    encoding: "utf-8"
}, (err, data) => {
    console.log(data);
});