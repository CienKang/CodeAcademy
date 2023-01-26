const express = require('express');
const PORT = 8000;
let TASKS = [];

const app = express();
app.use(express.json());

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

app.route('/todos')
    .get(getTasks)
    .post(postTasks)
    .delete(deleteCompleteTasks);

app.route('/todos/:id')
    .get(getTaskByID)
    .delete(deletTaskByID)
    .patch(updateTaskByID);
    
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));