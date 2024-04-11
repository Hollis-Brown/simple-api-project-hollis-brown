// code 5

self.onmessage = function(eventObject) {
  fetch(eventObject.data)
       .then(function(response) {
         if (!response.ok) throw new Error('Invalid response');
         return response.json();
       })
       .then(function(dataArray) {
         let firstUser = dataArray[0];
         self.postMessage( `<li class="list-group-item"> 
         <p><strong>Id:</strong> ${firstUser.id}</p> 
         <p><strong>Name:</strong> ${firstUser.name}</p> 
         <p><strong>Username:</strong> ${firstUser.username}</p> 
         <p><strong>Email:</strong> ${firstUser.email}</p> 
         <p><strong>Phone:</strong> ${firstUser.phone}</p> 
         <p><strong>Website:</strong> ${firstUser.website}</p>
       </li>`);
       })
       .catch(function(error) {
         console.error('Error:', error);
         self.postMessage(error);
       });
 };
 