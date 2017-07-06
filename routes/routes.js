const express = require('express');
const router = express.Router();
const data = require('../public/data');

router.get('/api/todos', (req, res) => {
  res.render('app');
})

router.post('/api/todos', (req, res) => {
  res.json(data);
})

router.put('/api/todos/:id', (req, res) => {
  res.json(data);
})

router.patch('/api/todos/:id', (req, res) => {
  res.json(data);
})

router.delete('/api/todos/:id', (req, res) => {
  res.json(data);
})

module.exports = router;
