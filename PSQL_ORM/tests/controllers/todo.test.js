
const todoController = require('../../src/controllers/todo.controller');
const todoService = require('../../src/services/todo.services');

describe('todo.controller', () => {

    describe('getTaskByID', () => {

        it('should return a task of specific id with status 200', async () => {
            const mockTask = {
                id: 1,
                taskName: ' ',
                isComplete: false
            };
            jest.spyOn(todoService, 'getTaskFromDB').mockResolvedValue(mockTask);
            const req = {
                params: {
                    id: 1
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn(),
            };
            await todoController.getTaskByID(req, res);
            expect(res.send).toHaveBeenCalledWith(mockTask);
            expect(res.status).toHaveBeenCalledWith(200);
        });

    });

    describe('deletTaskByID', () => {

        it('should delete a task of specific id with status 200', async () => {
            const mockMsg = 'Task with id 1 was deleted.';
            jest.spyOn(todoService, 'deleteTaskFromDB').mockResolvedValue(mockMsg);
            const req = {
                params: {
                    id: 1
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn(),
            };
            await todoController.deletTaskByID(req, res);
            expect(res.send).toHaveBeenCalledWith(mockMsg);
            expect(res.status).toHaveBeenCalledWith(200);
        });

    });

    describe('updateTaskByID', () => {

        it('should update a task of specific id with status 200', async () => {
            const mockTask = {
                id: 1,
                taskName: 'updatedTaskName',
                isComplete: true
            };
            jest.spyOn(todoService, 'updateTaskFromDB').mockResolvedValue(mockTask);
            const req = {
                params: {
                    id: 1
                },
                body: mockTask
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn(),
            };
            await todoController.updateTaskByID(req, res);
            expect(res.send).toHaveBeenCalledWith(mockTask);
            expect(res.status).toHaveBeenCalledWith(200);
        });

    });

});