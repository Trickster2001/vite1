import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const TodoForm = () => {
  
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const add = (e) => {
    e.preventDefault();
    dispatch(addTodo(todo));
    setTodo("");
  }
  
  return (
    <>
    <form onSubmit={add}>
      <h1 className='text-3xl text-white font-bold text-center pt-6 w-fit mx-auto'>Add Todos...</h1>
      <div className='text-center pt-6 '>
        <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" className='outline-none rounded-l-lg  px-3 py-2 duration-100 ease-in w-[80vw] md:w-2/3 lg:w-[50vw]' placeholder='todo...'  />
        <button type='submit' className='bg-green-500 py-2 px-3 rounded-r-lg'>Add</button>
      </div>
      </form>
    </>
  )
}

export default TodoForm