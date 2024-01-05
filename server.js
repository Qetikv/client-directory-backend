const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors module
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

let users = [];

app.post('/api/users', (req, res) => {
  const userData = req.body;
  users.push(userData);
  console.log('Users:', users);
  res.status(201).json(userData);
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.delete('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(/* appropriate response */);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
