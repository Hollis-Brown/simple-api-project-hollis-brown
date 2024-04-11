// Basic async and await using the fetch() API to perform fetching of data from a server at the click of a button

// code 1

console.log("Hello, Good Afternoon!");

const jsonStr = 'https://jsonplaceholder.typicode.com/users';

let list = document.getElementById('list');

// Function to fetch and display data for a user
const loadUser = async () => {
  try {
  // Fet user list
    const response = await fetch(jsonStr)
    // Parses JSON response into a JavaScript object
    const users = await response.json();
      // Pick first user and display that data
      if (users.length > 1) {
        const user = users[0];
        const userHtml = `<li class="list-group-item">
          <p><strong>Id:</strong> ${user.id}</p>
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Username:</strong> ${user.username}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <p><strong>Website:</strong> ${user.website}</p>
        </li>`;
        list.innerHTML = userHtml;
      } else {
        list.innerHTML = 'No more users available.';
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      list.innerHTML = `Could not fetch user data: ${error}`;
    }
  };

// Attach click event listener to the "Load Another User" button
const loadUserButton = document.getElementById('loadUserButton');
loadUserButton.addEventListener('click', loadUser);
