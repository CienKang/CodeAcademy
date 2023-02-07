const express = require('express');
const todosController = require('../controllers/todos.controller');
const app = express.Router();

app.route('/todos')
    .get(todosController.getAllTodos)
    .post(todosController.createTodo)
    .delete(todosController.deleteCompletedTodo);

module.exports = app ;