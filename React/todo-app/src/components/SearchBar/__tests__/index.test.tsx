import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchBar } from '../index';

describe('SearchBar', () => {

    it('should render an input and a button when rendered for first time', () => {

        const setTasks = jest.fn();
        const { getByPlaceholderText, getByText } = render(<SearchBar tasks={[]} setTasks={setTasks} />);
        expect(getByPlaceholderText('Enter the task name')).toBeInTheDocument();
        expect(getByText('Add')).toBeInTheDocument();
    });

    it('should add a task to the list when clicked', () => {

        const setTasks = jest.fn();
        const { getByPlaceholderText, getByText } = render(<SearchBar tasks={[]} setTasks={setTasks} />);
        const input = getByPlaceholderText('Enter the task name');
        const button = getByText('Add');
        fireEvent.change(input, { target: { value: 'test' } });
        fireEvent.click(button);
        expect(setTasks).toHaveBeenCalledWith(['test']);
    });

    it('should not add a task to the list when clicked with empty input', () => {

        const setTasks = jest.fn();
        const { getByPlaceholderText, getByText } = render(<SearchBar tasks={[]} setTasks={setTasks} />);
        const input = getByPlaceholderText('Enter the task name');
        const button = getByText('Add');
        fireEvent.change(input, { target: { value: '' } });
        fireEvent.click(button);
        expect(setTasks).not.toHaveBeenCalled();
    });

    it('should remains same when rendered for the first time', () => {

        const setTasks = jest.fn();
        const { asFragment } = render(<SearchBar tasks={[]} setTasks={setTasks} />);
        expect(asFragment()).toMatchSnapshot();
    });

});