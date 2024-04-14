console.log("Hello, Good Afternoon!");

const jsonStr = 'https://jsonplaceholder.typicode.com/users';

let list = document.getElementById('list');
let loadUserButton = document.createElement('button');
loadUserButton.textContent = 'Load Data';
list.appendChild(loadUserButton);


const loadUser = async () => {
  try {

    const response = await fetch(jsonStr)

    const users = await response.json();
     
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
  
  loadUserButton.addEventListener('click', loadUser);

