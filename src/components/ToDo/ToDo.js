import React from 'react';
import './ToDo.css'

const ToDo = props => {
    return (
        <div className='todo'>
            <li className='todo-item'>
                {props.text}
            </li>
            <button>Complete</button>
            <button>Delete</button>
        </div>
    );
};

export default ToDo;