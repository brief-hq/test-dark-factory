const express = require('express');
const router = express.Router();

// In-memory store
let tasks = [
  { id: 1, title: 'Set up project', status: 'done', createdAt: '2026-03-30T10:00:00Z' },
  { id: 2, title: 'Add authentication', status: 'in_progress', createdAt: '2026-03-30T11:00:00Z' },
  { id: 3, title: 'Write tests', status: 'todo', createdAt: '2026-03-30T12:00:00Z' },
];
let nextId = 4;

// GET /api/tasks - list all tasks
router.get('/', (req, res) => {
  const { status } = req.query;
  let filtered = tasks;
  if (status) {
    filtered = tasks.filter(t => t.status === status);
  }
  res.json({ tasks: filtered, total: filtered.length });
});

// GET /api/tasks/:id - get single task
router.get('/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.json(task);
});

// POST /api/tasks - create task
router.post('/', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const task = {
    id: nextId++,
    title,
    status: 'todo',
    createdAt: new Date().toISOString(),
  };
  tasks.push(task);
  res.status(201).json(task);
});

// PATCH /api/tasks/:id - update task status
router.patch('/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  const { title, status } = req.body;
  if (title) task.title = title;
  if (status) task.status = status;
  res.json(task);
});

// DELETE /api/tasks/:id - delete task
router.delete('/:id', (req, res) => {
  const idx = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (idx === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  tasks.splice(idx, 1);
  res.status(204).send();
});

module.exports = { taskRouter: router };
