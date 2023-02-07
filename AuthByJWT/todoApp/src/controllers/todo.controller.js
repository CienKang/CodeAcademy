const todoServices = require('../services/todo.services');

const getSpecificTodo = async (req, res) => {
    try {
        const data = await todoServices.getSpecificTaskFromDB(req.params.id);
        res.status(200).json({
            message: 'Sending specific task from DB',
            data: data
        });
    }

    catch (err) {
        res.status(500).json({
            message: 'Error while getting specific task from DB',
            data: err
        });
    }
};

const updateSpecificTodo = async (req, res) => {
    try {
        const data = await todoServices.updateSpecificTaskInDB(req.params.id, req.body);
        res.status(201).json({
            message: 'Updating specific task in DB',
            data: data
        });
    }

    catch (err) {
        res.status(500).json({
            message: 'Error while updating specific task in DB',
            data: err
        });
    }
};

const deleteSpecificTodo = async (req, res) => {
    try {
        const data = await todoServices.deleteSpecificTaskFromDB(req.params.id);
        res.status(200).json({
            message: 'Deleting specific task from DB',
            data: data
        });
    }

    catch (err) {
        res.status(500).json({
            message: 'Error while deleting specific task from DB',
            data: err
        });
    }
};


module.exports = { getSpecificTodo, updateSpecificTodo, deleteSpecificTodo };