import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'
import TodoItem from './TodoItem';

const Todos = () => {

  // const [todoMsg, setTodoMsg] = useState(todo.text);

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch()

  return (
    <>
    <div>Todos</div>
    {todos.map((todo) => (
      <li key={todo.id}>{todo.text}
      <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
      </li>
      // <TodoItem todo={todo} />
    ))}

    {/* <div>
      <input type="text" value={todoMsg} onChange={(e)=>setTodoMsg(e.target.value)} />
      <button onClick={() => dispatch(updateTodo({id:todo.id, text: todoMsg}))}>Edit</button>
    </div> */}
    </>
  )
}

export default Todos