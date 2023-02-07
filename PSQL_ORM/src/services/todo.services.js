const db = require('../../database/models');

const getTaskFromDB = async (id) => {
    const requiredEntry = await db.Task.findAll({
        where: {
            id: id
        }
    });
    return requiredEntry;
};

const deleteTaskFromDB = async (id) => {
    const msg = await db.Task.destroy({
        where: {
            id: id
        }
    });

    if (msg === 0)
        return 'No record was found to be deleted.';
    return 'The record you have requested has been deleted successfully.';
};

const updateTaskFromDB = async (id, body) => {
    const msg = await db.Task.update({ ...body }, {
        where: {
            id: id
        },
        // returning: true [ It returns JSON with objects updated and number of objects changed.]
    });
    console.log(msg);
    if (msg[0] === 0)
        return 'The Record related to id was not found in the database';
    return getTaskFromDB(id);
};

module.exports = {
    getTaskFromDB,
    deleteTaskFromDB,
    updateTaskFromDB
};