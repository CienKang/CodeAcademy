import  PropTypes from 'prop-types';
import React from 'react';

interface PropTypes {
    setTasks: React.Dispatch<React.SetStateAction<any[]>>;
    tasks: any[];
}

export const List = (props: PropTypes): JSX.Element => {
    const deleteHandler = (item: string): void => {
        const data = props.tasks.filter((ele) => ele != item );
        props.setTasks(data);
    };

    return (
        <div className="todo-container">
            {props.tasks.map((item, idx) => {
                return (
                    <div key={idx}>
                        <h1>{item}</h1>
                        <button onClick={() => deleteHandler(item)} data-testid={idx} > Delete </button>
                    </div>
                );
            })}
        </div>
    );
};

List.propTypes = {
    setTasks: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,
};