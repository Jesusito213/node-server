
const express = require('express');

const bodyParser = require('body-parser');

const listViewRouter = require('./list-view-router');

const listEditRouter = require('./list-edit-router');


const app = express();


app.use(bodyParser.json());


const tasks = [
  { id: 1, description: 'Buy groceries', status: 'pending' },
  { id: 2, description: 'Clean kitchen', status: 'pending' },
  { id: 3, description: 'Cook dinner', status: 'completed' },

];


app.use('/list-view', listViewRouter);

app.use('/list-edit', listEditRouter);


app.listen(3000, () => {
  console.log('Server listening on port 3000');

});