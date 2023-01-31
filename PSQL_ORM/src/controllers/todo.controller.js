const { updateTaskFromDB, getTaskFromDB, deleteTaskFromDB } = require('../services/todo.services');

const getTaskByID = async (req, res) => {
    const { id } = req.params;
    res.status(200).send(await getTaskFromDB(id));
};

const deletTaskByID = async (req, res) => {
    const { id } = req.params;
    res.status(200).send(await deleteTaskFromDB(id));
};

const updateTaskByID = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.status(200).send(await updateTaskFromDB(id, body));
};

module.exports = { getTaskByID, deletTaskByID, updateTaskByID };