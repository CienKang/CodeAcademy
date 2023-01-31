const { getAllTasksFromDB, postTaskInDB, deleteCompleteTasksFromDB } = require('../services/todos.services');

const getTasks = async (req, res) => {
    return res.status(200).send(await getAllTasksFromDB());
};

const postTasks = async (req, res) => {
    res.status(201).send(await postTaskInDB(req.body));
};

const deleteCompleteTasks = async (req, res) => {
    res.status(200).send(await deleteCompleteTasksFromDB());
};


module.exports = { getTasks, postTasks, deleteCompleteTasks };