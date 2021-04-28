import './App.css';
import React, {useState} from 'react'
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {

    const [todos, setTodos] = useState([])
    const [inputText, setInputText] = useState('')


    return (
        <div className="App">
            <div className="App-wrapper">
                <header>
                    <h1>React ToDo App</h1>
                </header>
                <ToDoForm
                    todos={todos}
                    setTodos={setTodos}
                    inputText={inputText}
                    setInputText={setInputText}
                />
                <ToDoList todos={todos} setTodos={setTodos}/>
            </div>
        </div>
    );
}

export default App;
