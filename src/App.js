import './App.css';
import React, {useState} from 'react'

function App() {

    const [todos, setTodos] = useState([])
    const [inputText, setInputText] = useState('')

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
        <div className="App">
            <header>
                <h1>React App</h1>
            </header>
            <input
                type="text"
                onChange={inputHandler}
                onKeyDown={onPressEnter}
                value={inputText}
            />
            <button onClick={addTaskHandler}>+</button>
            {todos.map(i => <div>{i}</div>)}

        </div>
    );
}

export default App;
