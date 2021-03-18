const http = require('http');
const Stream = require('stream').Transform;
const fs = require('fs');

const download = async (url, path) => {
    http.request(url, function (response) {
        const data = new Stream();

        response.on('data', function (chunk) {
            data.push(chunk);
        });

        response.on('end', function () {
            fs.writeFileSync(`${path}`, data.read());
        });
    }).end();
}

module.exports = {
    download
};