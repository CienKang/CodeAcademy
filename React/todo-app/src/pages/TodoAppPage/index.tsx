import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { List, SearchBar } from '../../components';
import { GET_ALL_TODOS } from '../../constants/apiEndPoints';
import { makeRequestToApp } from '../../utils/MakeRequest';

import './TodoAppPage.css';
const TodoAppPage = (): JSX.Element => {
    const [tasks, setTasks] = React.useState<any[]>([]);
    const getTasks = async () => {
        const response = await makeRequestToApp({ ...GET_ALL_TODOS, headers:{'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInVzZXJuYW1lIjoiYWdhbnlhIiwiaWF0IjoxNjc3MDcyODA1LCJleHAiOjE2NzcwNzY0MDV9.UhN5LbK486PTxlwaLjrTwp8Naxq6rYyZrWuietJSEoU'} });
        console.log(response);
    };

    React.useEffect(() => {
        getTasks();
    }, []);

    return (

        <div className="todo-container">
            <h1> To Do APP</h1>
            <SearchBar tasks={tasks} setTasks={setTasks} />
            <List tasks={tasks} setTasks={setTasks} />
        </div>

    );
};

export default TodoAppPage;