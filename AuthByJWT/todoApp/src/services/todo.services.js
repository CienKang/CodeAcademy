const { Tasks } = require('../../database/models');

const getSpecificTaskFromDB = async (id) => {
    const data = await Tasks.findOne({
        where: {
            id: id
        }
    });
    return data;
};

const updateSpecificTaskInDB = async (id, body) => {
    const data = await Tasks.update(body, {
        where: {
            id: id
        }
    });
    return data;
};
const deleteSpecificTaskFromDB = async (id) => {
    const data = await Tasks.destroy({
        where: {
            id: id
        }
    });
    return data;
};

module.exports = { getSpecificTaskFromDB, updateSpecificTaskInDB, deleteSpecificTaskFromDB };