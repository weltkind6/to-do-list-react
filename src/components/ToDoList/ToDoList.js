import React from 'react';
import ToDo from "./ToDo/ToDo";
import './ToDoList.css'


const ToDoList = ({todos, setTodos}) => {
    return (
        <div>
            <ul>
                {todos.map(todo =>
                    <ToDo
                        key={todo.id}
                        text={todo.text}
                        id={todo.id}
                        setTodos={setTodos}
                        todos={todos}
                        todo={todo}
                        complete={todo.complete}
                    />)}
            </ul>
        </div>
    );
};

export default ToDoList;