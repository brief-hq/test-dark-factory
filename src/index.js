const express = require('express');
const { taskRouter } = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ name: 'Task Tracker API', version: '1.0.0' });
});

app.use('/api/tasks', taskRouter);

app.listen(PORT, () => {
  console.log(`Task Tracker API running on port ${PORT}`);
});

module.exports = { app };
