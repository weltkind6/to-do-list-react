import React from 'react';
import './ToDoForm.css'

const ToDoForm = ({todos, setTodos, inputText, setInputText}) => {

    const addTaskHandler = () => {
        setTodos([...todos,
            {
                text: inputText,
                id: Math.random() * 500,
                complete: false
            }])
        setInputText('')
    }
    const inputHandler = (e) => {
        setInputText(e.target.value)
    }
    const onPressEnter = e => {
        if (e.code === 'Enter') {
            addTaskHandler()
        }
    }


    return (
        <div className='ToDoForm-wrapper'>
            <input
                type="text"
                onChange={inputHandler}
                onKeyDown={onPressEnter}
                value={inputText}
                placeholder='New task'
                className='ToDoForm-input'
            />
            <button onClick={addTaskHandler} className='ToDoForm-button'>+</button>

        </div>
    );
};

export default ToDoForm;