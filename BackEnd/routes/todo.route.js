const { Router } = require('express');
const { getTaskByID, deletTaskByID, updateTaskByID } = require('../controllers/todo.controller');

const app = Router();

app.route('/todos/:id')
    .get(getTaskByID)
    .delete(deletTaskByID)
    .patch(updateTaskByID);

module.exports = app;