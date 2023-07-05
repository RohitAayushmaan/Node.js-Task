const express = require('express');
const app = express();

class Fruit {
  constructor(id, name, color) {
    this.id = id;
    this.name = name;
    this.color = color;
  }
}

const fruits = [
  new Fruit(1, 'Apple', 'Red'),
  new Fruit(2, 'Banana', 'Yellow'),
  new Fruit(3, 'Orange', 'Orange'),
  new Fruit(4, 'Grapes', 'Green'),
];

app.get('/fruits', (req, res) => {
  const sortedFruits = fruits.sort((a, b) => a.color.localeCompare(b.color));
  res.json(sortedFruits);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

app.get('/', (req, res) => {
    res.send('Welcome to the SortedList API');
  });