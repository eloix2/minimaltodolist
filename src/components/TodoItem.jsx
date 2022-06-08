import React from 'react'
import './styles/todoItem.css'
import { App } from '../App.jsx'

export function TodoItem({ todo, handleDeleteDone, toggleTodo }) {
    const { id, task, completed } = todo;
    var icon;
    const handleTodoClick = () => {
        toggleTodo(id);
    };

    const handleDone = () => {
        toggleTodo(id);
        handleDeleteDone();
    };

    var iscompleted = () => {
        if(completed){
            icon = <h1>❌</h1>
        }
        else{
            icon = <h1>✔</h1>
        }
    }
  return (
      <div className='todoItem'>
            <li draggable={true}>
                {task}
                <button className='doneButton' onClick={handleTodoClick}>{completed ? "❌" : "✔" }</button>
            </li>
      </div>
  )
}
