const express = require('express');
const app = express();
const PORT = 8000;
const TODOS = require('./src/routes/todos.route');
const TODO = require('./src/routes/todo.route');

app.use(express.json());
app.use(TODOS);
app.use(TODO);

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));