import React from 'react';
import './ToDo.css'

const ToDo = ({text, todos, setTodos, todo, complete}) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    const completeHandler = () => {
        console.log(todo.id)
       setTodos(
           todos.map(item => {
               if(item.id === todo.id) {
                   return {
                       ...item,
                       complete: !item.complete,
                   }
               }
               return item
           })
       )
    }
    return (
        <div className='todo'>
            <li className={`todo-item ${complete ? 'completed' : ''}`}>
                {text}
            </li>
            <button onClick={completeHandler}>Complete</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
};

export default ToDo;