self.onmessage = function(eventObject) {
  fetch(eventObject.data)
     .then(function(response) {
       if (!response.ok) throw new Error('Invalid response');
       return response.json();
     })
     .then(function(dataArray) {
       // Function to calculate the distance between two points given their latitudes and longitudes
       function calculateDistance(lat1, lon1, lat2, lon2) {
         const R = 6371; // Radius of the earth in km
         const dLat = deg2rad(lat2 - lat1);
         const dLon = deg2rad(lon2 - lon1);
         const a =
           Math.sin(dLat / 2) * Math.sin(dLat / 2) +
           Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
           Math.sin(dLon / 2) * Math.sin(dLon / 2);
         const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
         const d = R * c; // Distance in km
         return d;
       }
 
       function deg2rad(deg) {
         return deg * (Math.PI / 180);
       }
 
       // Calculate distances between each pair of users
       let distances = [];
       for (let i = 0; i < dataArray.length; i++) {
         for (let j = i + 1; j < dataArray.length; j++) {
           const user1 = dataArray[i];
           const user2 = dataArray[j];
           const distance = calculateDistance(user1.address.geo.lat, user1.address.geo.lng, user2.address.geo.lat, user2.address.geo.lng);
           distances.push({
             user1: user1.username,
             user2: user2.username,
             distance: distance
           });
         }
       }
 
       // Post the distances back to the main thread
       self.postMessage(distances);
     })
     .catch(function(error) {
       console.error('Error:', error);
       self.postMessage(error);
     });
 };
 
