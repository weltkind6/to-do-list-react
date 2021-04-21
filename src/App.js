import './App.css';
import React, {useState} from 'react'
import ToDoForm from "./components/ToDoForm/ToDoForm";

function App() {

    const [todos, setTodos] = useState([])
    const [inputText, setInputText] = useState('')


    return (
        <div className="App">
            <header>
                <h1>React App</h1>
            </header>
            <ToDoForm
                todos={todos}
                setTodos={setTodos}
                inputText={inputText}
                setInputText={setInputText}
            />
            {todos.map(i => <div>{i}</div>)}

        </div>
    );
}

export default App;
