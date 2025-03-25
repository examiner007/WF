// wordCount.js
const fs = require('fs');
const path = require('path');

function countWordOccurrences(filePath, word) {
    if (!fs.existsSync(filePath)) {
        console.error('File does not exist.');
        return;
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const regex = new RegExp(`\b${word}\b`, 'gi'); // Match whole words, case-insensitive
    const matches = fileContent.match(regex);

    const count = matches ? matches.length : 0;
    console.log(`The word "${word}" occurs ${count} time(s) in the file.`);
}

// Example usage:
const filePath = path.join(__dirname, 'sample.txt'); // Sample file to read
const wordToSearch = 'node'; // Word to count

countWordOccurrences(filePath, wordToSearch);
