const axios = require('axios');

axios.delete('http://localhost:3000/api/users/clear')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error clearing user data:', error.message);
  });
