const todosServices = require('../services/todos.services');
const getAllTodos = async (req, res) => {

    try {
        const data = await todosServices.getAllTasksFromDB();
        res.status(200).json({
            message: 'Sending all tasks from DB',
            data: data
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'Error while getting all tasks from DB',
            data: err
        });
    }
};


const createTodo = async (req, res) => {
    const body = req.body;
    try {
        const data = await todosServices.createTaskInDB(body);
        res.status(201).json({
            message: 'Creating a new task in DB',
            data: data
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'Error while creating a new task in DB',
            data: err
        });
    }

};

const deleteCompletedTodo = async (req, res) => {

    try {
        const data = await todosServices.deleteCompletedTaskFromDB();
        res.status(200).json({
            message: 'Deleting all completed tasks from DB',
            data: data
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'Error while deleting all completed tasks from DB',
            data: err
        });
    }
};

module.exports = { getAllTodos, createTodo, deleteCompletedTodo };