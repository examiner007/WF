const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Event Listener for 'start' event
myEmitter.on('start', () => {
    console.log('The application has started!');
});

// Event Listener for 'data' event
myEmitter.on('data', (data) => {
    console.log(`Received data: ${data}`);
});

// Event Listener for 'end' event
myEmitter.on('end', () => {
    console.log('The application has ended.');
});

// Main loop - simulates an event-driven flow
console.log('Starting the application...');
myEmitter.emit('start');

setTimeout(() => {
    myEmitter.emit('data', 'Sample data received.');
}, 2000);

setTimeout(() => {
    myEmitter.emit('end');
}, 4000);
