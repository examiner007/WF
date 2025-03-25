// userLoginSystem.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Sample users database (for demonstration purposes)
const users = [
    { username: 'admin', password: 'password123' },
    { username: 'user1', password: 'welcome123' }
];

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <h2>User Login System</h2>
        <form action="/login" method="POST">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required><br><br>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>

            <input type="submit" value="Login">
        </form>
    `);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.send(`<h3>Login Successful! Welcome, ${username}.</h3>`);
    } else {
        res.send('<h3>Login Failed! Invalid username or password.</h3>');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
