
const express = require('express');

const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());


const tasks = [
  { id: 1, description: 'Buy groceries', status: 'pending' },
  { id: 2, description: 'Clean kitchen', status: 'pending' },
  { id: 3, description: 'Cook dinner', status: 'completed' },

];


app.get('/tasks', (req, res) => {
  res.json(tasks);

});


app.listen(3000, () => {
  console.log('Server listening on port 3000');

});

javascript

app.post('/tasks', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.json(tasks);

});