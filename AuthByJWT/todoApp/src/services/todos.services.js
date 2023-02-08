const { Tasks } = require('../../database/models');
const usernameUtils= require('../utils/username');
const getAllTasksFromDB = async () => {

    const data = await Tasks.findAll();
    if (!data)
        throw new Error('getAllTasksFromDB service encountered an error');

    return data;
};

const createTaskInDB = async (body) => {
    const data = await Tasks.create({ 
        title: body.title, 
        isComplete: false ,
        username: usernameUtils.USERNAME
    });
    
    // if(!data)
    // throw new Error('createTaskInDB service encountered an error');

    return data;
};

const deleteCompletedTaskFromDB = async () => {
    const data = await Tasks.destroy({
        where: {
            isComplete: true
        }
    });

    if (!data)
        throw new Error(console.log(data));

    return data;
};

module.exports = { getAllTasksFromDB, createTaskInDB, deleteCompletedTaskFromDB };