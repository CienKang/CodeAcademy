import * as React from 'react';
import { List, SearchBar } from '../../components';

export const TodoAppPage = (): JSX.Element => {
    const [tasks, setTasks] = React.useState<any[]>([]);
    return (
        <div className="todo-container">
            <h1> To Do APP</h1>
            <SearchBar tasks={tasks} setTasks={setTasks} />
            <List tasks={tasks} setTasks={setTasks} />
        </div>
    );
};