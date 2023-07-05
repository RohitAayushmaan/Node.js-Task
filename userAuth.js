const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const users = [];

app.get('/login', (req, res) => {
  res.send('Please use POST method to login');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !username.match(/^[a-zA-Z0-9]{6,12}$/)) {
    return res.status(400).json({ error: 'Invalid username' });
  }

  if (!password || password.length < 6) {
    return res.status(400).json({ error: 'Invalid password' });
  }

  users.push({ username, password });

  return res.json({ message: 'User logged in successfully' });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

app.get('/', (req, res) => {
    res.send('Welcome to the UserAuth API');
  });