console.log("Hello, Good Afternoon!");

const jsonStr = 'https://jsonplaceholder.typicode.com/users';

let list = document.getElementById('list');
let loadUserButton = document.createElement('button');
loadUserButton.textContent = 'Load Data';
list.appendChild(loadUserButton);

let worker = new Worker('5-worker.js');

loadUserButton.addEventListener('click', () => {
 worker.postMessage(jsonStr);

 worker.onmessage = function(event) {
    if (Array.isArray(event.data)) {
      let distancesHTML = event.data.map(distanceObj => `<li class="list-group-item"><p><strong>Distance between ${distanceObj.user1} and ${distanceObj.user2}:</strong> ${distanceObj.distance.toFixed(2)} km</p></li>`).join('');
      list.innerHTML = distancesHTML;
    } else {
      list.innerHTML = event.data;
    }
    list.removeChild(loadUserButton);
 };
});





