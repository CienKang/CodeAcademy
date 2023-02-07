
const todosController = require('../../src/controllers/todos.controller');
const todosService = require('../../src/services/todos.services');

describe('todos.controller', () => {

    describe('getAllTasksFromDB ', () => {

        it('should return an array of tasks with status 200', async () => {
            const mockTasks = [
                {
                    id: 1,
                    taskName: 'test',
                    isComplete: false
                }];
            jest.spyOn(todosService, 'getAllTasksFromDB').mockResolvedValue(mockTasks);
            const req = {};
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn(),
            };
            await todosController.getTasks(req, res);
            expect(res.send).toHaveBeenCalledWith(mockTasks);
            expect(res.status).toHaveBeenCalledWith(200);
        });

    });

    describe('postTaskInDB', () => {
        it('should create a new task with status code 201', async () => {
            const mockTask = {
                taskName: 'test',
                isComplete: false
            };
            jest.spyOn(todosService, 'postTaskInDB').mockResolvedValue(mockTask);

            const req = {
                body: mockTask
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn(),
            };
            await todosController.postTasks(req, res);
            expect(res.send).toHaveBeenCalledWith(mockTask);
            expect(res.status).toHaveBeenCalledWith(201);
        });
    });

    describe('deleteCompleteTasksFromDB', () => {

        it('should delete all complete tasks', async () => {
            const mockMsg = 'All records having attribute isComplete equal to true were deleted.';
            jest.spyOn(todosService, 'deleteCompleteTasksFromDB').mockResolvedValue(mockMsg);
            const req = {};
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn(),
            };
            await todosController.deleteCompleteTasks(req, res);
            expect(res.send).toHaveBeenCalledWith(mockMsg);
            expect(res.status).toHaveBeenCalledWith(200);
        });
    });

});
