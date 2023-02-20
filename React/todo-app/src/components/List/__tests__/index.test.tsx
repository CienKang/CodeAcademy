import React from 'react';
import { fireEvent, render} from '@testing-library/react';
import { List } from '../index';

describe('List', () => {
    it('should render a list of tasks when some tasks are already present', () => {
        const setTasks = jest.fn();
        const { getByText } = render(<List tasks={['test1', 'test2']} setTasks={setTasks} />);

        expect(getByText('test1')).toBeInTheDocument();
        expect(getByText('test2')).toBeInTheDocument();
    });

    it('should delete the task when the delete button is clicked for a certain task', () => {
        const setTasks = jest.fn();

        const { getByTestId } = render(<List tasks={['test1', 'test2']} setTasks={setTasks} />);
        const deleteButton = getByTestId('0');
        fireEvent.click(deleteButton);

        expect(setTasks).toHaveBeenCalledWith(['test2']);
        expect(setTasks).not.toHaveBeenCalledWith(['test1']);
    });

    it('should match the snapshot when rendered for the first time with same tasks', () => {
        const setTasks = jest.fn();
        const { asFragment } = render(<List tasks={['test1', 'test2']} setTasks={setTasks} />);
        expect(asFragment()).toMatchSnapshot();
    });

});