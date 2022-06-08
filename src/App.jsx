import React, { Fragment, useState, useRef, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid'
import { TodoList } from './components/TodoList';
import './components/styles/App.css'

const KEY = "todoApp.todos";

export function App(){
    const [todos, setTodos] = useState([{id: 1, task: 'Tarea 1', completed: false}]);
    const [dones, setDones] = useState([{id: 31231321321, task: 'Tarea 1', completed: true}]);

    const todoTaskRef = useRef();
    
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if(storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos));
    }, [todos]);

    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id == id);
        todo.completed = !todo.completed;
        setTodos(newTodos);
    };

    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        if(task == '') return;

        setTodos((prevTodos) => {
            return [... prevTodos, {id: uuidv4(), task, completed: false}]
        });

        todoTaskRef.current.value = null;
    };

    const handleDeleteDone = (id) => {
        const newTodos = todos.filter((todo) => todo.id != id);
        setTodos(newTodos);
    };
    
    var handleKeyPress = (event) => { 
        if(event.key === 'Enter'){
            const task = todoTaskRef.current.value;
            if(task === '') return;

            setTodos((prevTodos) => {
                return [... prevTodos, {id: uuidv4(), task, completed: false}]
            });

            todoTaskRef.current.value = null;
        }
    };

    return (
        <div className='app'>
            <h1>Todo List</h1>
            <input ref={todoTaskRef} type="text" placeholder="New Task" onKeyPress={handleKeyPress} />
            <button className='addButton' onClick={handleTodoAdd}>➕</button>
            <button className='deleteButton' onClick={handleDeleteDone}>🗑</button>
            <div className='taskCompletionCounter'>You have {todos.filter((todo) => !todo.completed).length} tasks left</div>
            
            <div className='listItemsTodo'> 
                <TodoList todos={todos.filter((todo) => !todo.completed)} handleDeleteDone={handleDeleteDone} toggleTodo={toggleTodo}/>
            </div>

            <div className='taskCompletionCounter'>You have {todos.filter((todo) => todo.completed).length} tasks done</div>

            <div className='listItemsDone'> 
                <TodoList todos={todos.filter((todo) => todo.completed)} handleDeleteDone={handleDeleteDone} toggleTodo={toggleTodo}/>
            </div>
        </div>
    )
}