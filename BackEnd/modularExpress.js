const express = require('express');
const app = express();
const PORT = 8000;
const TODOS = require('./routers/todos.router');
const TODO = require('./routers/todo.router');

app.use(express.json());
app.use(TODOS);
app.use(TODO);

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));