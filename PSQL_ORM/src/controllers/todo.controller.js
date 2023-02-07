const todoService = require('../services/todo.services');

const getTaskByID = async (req, res) => {
    const { id } = req.params;
    res.status(200).send(await todoService.getTaskFromDB(id));
};

const deletTaskByID = async (req, res) => {
    const { id } = req.params;
    res.status(200).send(await todoService.deleteTaskFromDB(id));
};

const updateTaskByID = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.status(200).send(await todoService.updateTaskFromDB(id, body));
};

module.exports = { getTaskByID, deletTaskByID, updateTaskByID };