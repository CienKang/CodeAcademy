const express = require('express');
const todoController = require('../controllers/todo.controller');
const app = express.Router();

app.route('/todo/:id')
    .get(todoController.getSpecificTodo)
    .put(todoController.updateSpecificTodo)
    .delete(todoController.deleteSpecificTodo);


module.exports = app ;