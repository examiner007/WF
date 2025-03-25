const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <h2>File Append Utility</h2>
        <form action="/append" method="POST">
            <label for="file1">First File Name:</label>
            <input type="text" id="file1" name="file1" required><br><br>

            <label for="file2">Second File Name:</label>
            <input type="text" id="file2" name="file2" required><br><br>

            <input type="submit" value="Append Contents">
        </form>
    `);
});

app.post('/append', (req, res) => {
    const { file1, file2 } = req.body;

    if (!fs.existsSync(file1) || !fs.existsSync(file2)) {
        return res.send("Error: One or both files do not exist.");
    }

    const contentToAppend = fs.readFileSync(file1, 'utf8');
    fs.appendFileSync(file2, contentToAppend);

    res.send(`Contents of ${file1} successfully appended to ${file2}.`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
