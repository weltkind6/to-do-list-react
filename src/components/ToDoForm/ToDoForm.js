import React from 'react';

const ToDoForm = ({todos, setTodos, inputText, setInputText}) => {

    const addTaskHandler = () => {
        setTodos([...todos, inputText])
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
        <div>
            <input
                type="text"
                onChange={inputHandler}
                onKeyDown={onPressEnter}
                value={inputText}
            />
            <button onClick={addTaskHandler}>+</button>
        </div>
    );
};

export default ToDoForm;