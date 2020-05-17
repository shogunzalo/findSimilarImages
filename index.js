const fs = require('fs');
const dhash = require('dhash-image');
const { readdir } = require('fs');

const photosFolder = '../../../Desktop/Desk/backup\ photos/';

let resultsMap = {}
let resultsList = [];

readdir(photosFolder, async (err, files) => {
  for (let file of files) {
    if (isValidFile(file)) {
        let hexString = await getHexString(file);
        resultsMap[hexString] ? resultsMap[hexString].push(file) : resultsMap[hexString] = [file];
        console.log(file)
    }
  }

  for (let result in resultsMap) {
    resultsList.push({
        hash: result,
        resultList: resultsMap[result]
    });
  }

  resultsList.sort(function(a, b){
    return b.resultList.length - a.resultList.length;
  });

    fs.writeFile("results.json", JSON.stringify(resultsList), function(err) {

        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    }); 

});

const isValidFile = file => {
    let lowerCaseFileName = file.toLowerCase();
    return lowerCaseFileName.endsWith('jpg') || file.endsWith('jpeg');
}

const getHexString = async file => {
    let hexString;
    await dhash(`${photosFolder}${file}`, function(err, hash){
        hexString = hash.toString('hex');
    });
    return hexString;
}
