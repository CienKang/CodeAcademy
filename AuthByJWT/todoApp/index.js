const express = require('express');
const app = express();
const PORT = 4000;

const todosRoute = require('./src/routes/todos.routes');
const todoRoute = require('./src/routes/todo.routes');
app.use(express.json());
app.use(todosRoute);
app.use(todoRoute);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));