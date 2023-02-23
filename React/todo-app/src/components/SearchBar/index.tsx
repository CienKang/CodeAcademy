import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './searchBar.css';

interface PropTypes {
    setTasks: React.Dispatch<React.SetStateAction<any[]>>;
    tasks: any[];
}

export const SearchBar = (props: PropTypes): JSX.Element => {
    const [taskName, setTaskName] = useState<string>('');

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTaskName(e.target.value);
    };
    const handleAdd = (): void => {
        if (taskName === '')
            return;

        props.setTasks([...props.tasks, taskName]);
    };

    return (
        <div className="search-bar">
            <input placeholder='Enter the task name' onChange={handleInput} />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

SearchBar.propTypes = {
    setTasks: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,
};