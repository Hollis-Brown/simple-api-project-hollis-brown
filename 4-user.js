// Using a dedicated worker to perform networking in JavaScript to fetch data at the click of a button

//A button is created and appended to the DOM.
// An event listener is added to the button. When the button is clicked, it sends a message to the worker with the URL of the API as a parameter.
// The worker receives the message, fetches the user data from the API, and posts a message back to the main thread with the data for the first user.
// The main thread receives the message from the worker, updates the innerHTML of the list with the data, and removes the button from the DOM.

// code 4

console.log("Hello, Good Afternoon!");

const jsonStr = 'https://jsonplaceholder.typicode.com/users';

let list = document.getElementById('list');
let loadUserButton = document.createElement('button');
loadUserButton.textContent = 'Load User Data';
list.appendChild(loadUserButton);

// Create a new worker
let worker = new Worker('5worker.js');

loadUserButton.addEventListener('click', () => {
 // Start the worker with the URL as a parameter
 worker.postMessage(jsonStr);

 // Listen for messages from the worker
 worker.onmessage = function(event) {
    // Display the user data
    list.innerHTML = event.data;
    // Remove the button
    list.removeChild(loadUserButton);
 };
});
