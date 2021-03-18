// Example posting a image URL:
const fs = require('fs');
const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML
const request = require('request');

deepai.setApiKey('dc205a02-fd27-42eb-9fd2-21b967eae99e');

const download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

download('https://www.google.com/images/srpr/logo3w.png', 'google.png', function () {
    console.log('done');
});

const getResult = async () => {
    const result = await deepai.callStandardApi("colorizer", {
        image: fs.createReadStream('./images/skycar/1.jpg')
    });
    return result;
}

getResult().then(res => {
    console.log(res);
})
