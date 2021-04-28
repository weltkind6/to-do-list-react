import React from 'react';
import './ToDo.css'

const ToDo = ({text, todos, setTodos, todo, complete}) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    const completeHandler = () => {
        setTodos(
            todos.map(item => {
                if (item.id === todo.id) {
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
        <div className={`todo ${complete ? 'todo__completed' : null}`}>
            <div className="todo__wrapper">
                <li className={`todo-item ${complete ? 'completed' : ''}`}>
                    {text}
                </li>


                <div className="todo__buttons">
                    <div onClick={completeHandler}>
                        <img src="https://pics.freeicons.io/uploads/icons/png/4420714451617256517-512.png" alt="done"
                             className='buttonsImg'/>
                    </div>
                    <div onClick={deleteHandler}>
                        <img src="https://pics.freeicons.io/uploads/icons/png/15495470391574055266-512.png"
                             className='buttonsImg'
                             alt="delete"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDo;