const express = require('express');

const router = express.Router();


router.post('/', (req, res) => {
  const newTask = req.body;
  newTask.id = tasks.length + 1;
  tasks.push(newTask);
  res.json(tasks);

});


router.delete('/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex!== -1) {
    tasks.splice(taskIndex, 1);
    res.json(tasks);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }

});


router.put('/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex!== -1) {
    const updatedTask = req.body;
    tasks[taskIndex] = updatedTask;
    res.json(tasks);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }

});


module.exports = router;