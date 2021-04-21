import React from 'react';
import ToDo from "../ToDo/ToDo";


const ToDoList = ({todos}) => {
    return (
        <div>
            <ul>
                {todos.map(todo => <ToDo text={todo.text} id={todo.id}/>)}
            </ul>
        </div>
    );
};

export default ToDoList;