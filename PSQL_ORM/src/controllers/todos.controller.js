const todosService = require('../services/todos.services');

const getTasks = async (req, res) => {

    res.status(200);
    res.send(await todosService.getAllTasksFromDB());
};

const postTasks = async (req, res) => {
    res.status(201).send(await todosService.postTaskInDB(req.body));
};

const deleteCompleteTasks = async (req, res) => {
    res.status(200).send(await todosService.deleteCompleteTasksFromDB());
};


module.exports = { getTasks, postTasks, deleteCompleteTasks };