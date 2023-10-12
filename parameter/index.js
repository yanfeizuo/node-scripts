const fs = require('fs');
const path = require('path')
const { mapValues, mapKeys } = require('lodash')

console.log('', __dirname)
const readPath = path.join(__dirname, 'goerli-new.json')
const writePath = path.join(__dirname, 'output.json')

// Read the input JSON file
fs.readFile(readPath, 'utf8', (err, jsonString) => {
    if (err) {
        console.log('Error reading input file:', err);
        return;
    }

    // Parse the JSON content
    const inputJson = JSON.parse(jsonString);

    // Modify the JSON content as needed
    const outputJson = modifyJson(inputJson);

    // Write the output JSON file
    fs.writeFile(writePath, JSON.stringify(outputJson, null, 2), (err) => {
        if (err) {
            console.log('Error writing output file:', err);
        } else {
            console.log('Output JSON file has been saved.');
        }
    });
});

// Function to modify the JSON content
function modifyJson(inputJson) {
    const newJSON = mapValues(inputJson, (value, key) => {
        return value.goerli.address
    })
    return newJSON;
}