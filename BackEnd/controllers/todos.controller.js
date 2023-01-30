let TASKS = require('../services');

const getTasks = (req, res) => {
    res.status(200);
    res.send(TASKS);
};

const postTasks = (req, res) => {
    const dataObj = req.body;
    dataObj['isComplete'] = false;
    dataObj['id'] = TASKS.length === 0 ? 0 : Number(TASKS[TASKS.length - 1]['id']) + 1;
    TASKS.push(dataObj);
    res.status(201);
    res.send(TASKS);
};

const deleteCompleteTasks = (req, res) => {
    TASKS = TASKS.filter(ele => ele.isComplete === false);
    res.status(200);
    res.send(TASKS);
};


module.exports = {getTasks,postTasks,deleteCompleteTasks};