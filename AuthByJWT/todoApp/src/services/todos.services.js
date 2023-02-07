const { Tasks } = require('../../database/models');
const getAllTasksFromDB = async () => {

    const data = await Tasks.findAll();
    console.log(data);
    if (!data)
        throw new Error('getAllTasksFromDB service encountered an error');

    return data;
};

const createTaskInDB = async (body) => {
    const data = await Tasks.create({ 
        title: body.title, 
        isComplete: false 
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