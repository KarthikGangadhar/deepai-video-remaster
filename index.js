// Example posting a image URL:
const fs = require('fs');
const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

deepai.setApiKey('dc205a02-fd27-42eb-9fd2-21b967eae99e');

const getResult = async () => {
    const result = await deepai.callStandardApi("content-moderation", {
        image: fs.createReadStream('./images/1.jpg')
    });
    return result;
}

getResult().then(res => {
    console.log(res);
})
