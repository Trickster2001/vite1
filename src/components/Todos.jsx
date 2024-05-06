import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice';
import TodoItem from './TodoItem';

const Todos = () => {
  const todos = useSelector((state)=>state.todos);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <>
    <div className='flex flex-wrap gap-3 m-10 justify-center'>
        {todos.map((todo)=>(
          <div key={todo.id}>
          <TodoItem todo={todo} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Todos