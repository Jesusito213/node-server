
const express = require('express');

const router = express.Router();


router.get('/completed', (req, res) => {
  const completedTasks = tasks.filter(task => task.status === 'completed');
  res.json(completedTasks);

});


router.get('/pending', (req, res) => {
  const pendingTasks = tasks.filter(task => task.status === 'pending');
  res.json(pendingTasks);

});


module.exports = router;