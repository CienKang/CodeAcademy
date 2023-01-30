let TASKS = require('../services');

const getTaskByID = (req, res) => {
    const { id } = req.params;
    res.status(200).send(TASKS.filter(ele => ele.id === Number(id)));
};

const deletTaskByID = (req, res) => {
    const { id } = req.params;
    const index = TASKS.findIndex(ele => ele.id === Number(id));
    res.status(200).send(index);
};

const updateTaskByID = (req, res) => {
    const { id } = req.params;
    const index = TASKS.findIndex(ele => ele.id === Number(id));
    const { name: newName, isComplete: completeStatus } = req.body;

    if (completeStatus != undefined)
        TASKS[index].isComplete = completeStatus;
    if (newName != undefined)
        TASKS[index].name = newName;

    res.status(200).send(TASKS);
};

module.exports = {getTaskByID,deletTaskByID,updateTaskByID};