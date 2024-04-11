// Using promise chaining and promise.all() using the fetch() API to perform networking in JavaScript to fetch user data at the click of a button

// code 2

console.log("Hello, Good Afternoon!");

const jsonStr = 'https://jsonplaceholder.typicode.com/users';

let list = document.getElementById('list');
let loadUserButton = document.createElement('button');
loadUserButton.textContent = 'Load User Data';
list.appendChild(loadUserButton);

loadUserButton.addEventListener('click', () => {
  let promise1 = fetch(jsonStr)
    .then(function(response) {
      console.log("Response received for promise1");

      if (!response.ok) throw new Error('invalid response');

      return response.json();
    })
    .then(function(dataArray) {
      console.log("Data received for promise1");
      let firstUser = dataArray[0];
      return `<li class="list-group-item"> 
        <p><strong>Id:</strong> ${firstUser.id}</p> 
        <p><strong>Name:</strong> ${firstUser.name}</p> 
        <p><strong>Username:</strong> ${firstUser.username}</p> 
        <p><strong>Email:</strong> ${firstUser.email}</p> 
        <p><strong>Phone:</strong> ${firstUser.phone}</p> 
        <p><strong>Website:</strong> ${firstUser.website}</p>
      </li>`;
    })
    .catch(function(error) {
      console.log("Error received for promise1");
      console.log(error);
      list.innerHTML = `Could not fetch user data: ${error}`;
    });

  let promise2 = fetch(jsonStr)
    .then(function(response) {
      console.log("Response received for promise2");

      if (!response.ok) throw new Error('invalid response');

      return response.json();
    })
    .then(function(dataArray) {
      console.log("Data received for promise2");
      let secondUser = dataArray[1];
      return `<li class="list-group-item"> 
        <p><strong>Id:</strong> ${secondUser.id}</p> 
        <p><strong>Name:</strong> ${secondUser.name}</p> 
        <p><strong>Username:</strong> ${secondUser.username}</p> 
        <p><strong>Email:</strong> ${secondUser.email}</p> 
        <p><strong>Phone:</strong> ${secondUser.phone}</p> 
        <p><strong>Website:</strong> ${secondUser.website}</p>
      </li>`;
    })
    .catch(function(error) {
      console.log("Error received for promise2");
      console.log(error);
      list.innerHTML = `Could not fetch user data: ${error}`;
    });

  Promise.all([promise1, promise2]).then(function(data) {
    console.log("Data received for both promises");
    list.innerHTML = data.join('');
  });
});

