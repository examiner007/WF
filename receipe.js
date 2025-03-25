// recipeBook.js
const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Sample Recipe Data
const recipes = [
    { name: 'Spaghetti Bolognese', ingredients: ['Spaghetti', 'Tomato Sauce', 'Minced Meat'], steps: 'Boil pasta, cook meat, mix with sauce.' },
    { name: 'Pancakes', ingredients: ['Flour', 'Eggs', 'Milk', 'Sugar'], steps: 'Mix ingredients, cook on a skillet.' },
    { name: 'Caesar Salad', ingredients: ['Lettuce', 'Croutons', 'Caesar Dressing'], steps: 'Chop lettuce, add dressing and croutons.' }
];

// Home route
app.get('/', (req, res) => {
    res.render('index', { recipes });
});

// Recipe Details route
app.get('/recipe/:name', (req, res) => {
    const recipe = recipes.find(r => r.name === req.params.name);
    if (recipe) {
        res.render('recipe', { recipe });
    } else {
        res.status(404).send('Recipe not found!');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
