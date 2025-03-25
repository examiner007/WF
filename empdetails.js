const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));

// Home route to render employee form
app.get('/', (req, res) => {
    res.render('employeeForm');
});

// Post route to handle employee data submission
app.post('/submit', (req, res) => {
    const employeeData = req.body;
    res.render('employeeDetails', { employee: employeeData });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
