const db = require('../../database/models');

const getAllTasksFromDB = async () => {
    const data = await db.Task.findAll();
    return data;
};

const postTaskInDB = async (dataObj) => {

    if(dataObj.taskName == null)
        return 'Please provide taskName for post request.';
    const newEntry = await db.Task.create({ ...dataObj, isComplete: false });
    return newEntry;
};

const deleteCompleteTasksFromDB = async () => {
    const msg = await db.Task.destroy({
        where: {
            isComplete: true,
        }
    });

    if (msg === 1)
        return 'All records having attribute isComplete equal to true were deleted.';
    else return 'No Record was found to have attribute isComplete equal to true.';
};

module.exports = {
    getAllTasksFromDB,
    postTaskInDB,
    deleteCompleteTasksFromDB
};