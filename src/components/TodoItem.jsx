import React from 'react'
import './styles/todoItem.css'

export function TodoItem({ todo, toggleTodo }) {
    const { id, task, completed } = todo;
    const handleTodoClick = () => {
        toggleTodo(id);
    };

  return (
      <div className='todoItem'>
            <li draggable={true}>
                {task}
                <button className='doneButton' onClick={handleTodoClick}>{completed ? "❌" : "✔" }</button>
            </li>
      </div>
  )
}
