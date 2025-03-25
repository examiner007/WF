const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Home route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to File Download App</h1><a href="/download">Download Sample File</a>');
});

// File download route
app.get('/download', (req, res) => {
    const filePath = path.join(__dirname, 'sample.txt');
    res.download(filePath, 'SampleFile.txt', (err) => {
        if (err) {
            console.error('Error downloading file:', err);
            res.status(500).send('Error downloading the file.');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
