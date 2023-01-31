const { Router } = require('express');
const { getTasks, postTasks, deleteCompleteTasks } = require('../controllers/todos.controller');

const app = Router();

app.route('/todos')
    .get(getTasks)
    .post(postTasks)
    .delete(deleteCompleteTasks);

module.exports = app;