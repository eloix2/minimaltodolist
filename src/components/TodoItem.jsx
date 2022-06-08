import React from 'react'
import './styles/todoItem.css'
import { App } from '../App.jsx'

export function TodoItem({ todo, handleDeleteDone, toggleTodo }) {
    const { id, task, completed } = todo;

    const handleTodoClick = () => {
        toggleTodo(id);
    };

    const handleDone = () => {
        toggleTodo(id);
        handleDeleteDone();
    };

  return (
      <div className='todoItem'>
            <li draggable={true}>
                <input type= "checkbox"  checked={completed} onChange={handleTodoClick}/>
                {task}
                <button className='doneButton' onClick={handleDone}>✔</button>
            </li>
      </div>
  )
}
