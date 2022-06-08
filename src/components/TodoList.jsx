import React from 'react'
import { TodoItem } from './TodoItem'


export function TodoList({ todos, handleDeleteDone, toggleTodo}) {
  return (
    <ul>
      {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleDeleteDone={handleDeleteDone} toggleTodo={toggleTodo}/>
      ))}
    </ul>
  )
};


