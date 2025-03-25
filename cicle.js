// circle.js
exports.area = function(radius) {
    return Math.PI * radius * radius;
};

exports.circumference = function(radius) {
    return 2 * Math.PI * radius;
};

// main.js
const circle = require('./circle');

const radius = 5;
console.log(`Area of circle with radius ${radius}: ${circle.area(radius).toFixed(2)}`);
console.log(`Circumference of circle with radius ${radius}: ${circle.circumference(radius).toFixed(2)}`);
