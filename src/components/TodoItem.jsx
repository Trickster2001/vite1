import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

const TodoItem = ({todo}) => {
  const [todoMsg, setTodoMsg] = useState(todo.text);

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch()
  return (
    <div>
      <input type="text" value={todoMsg} onChange={(e)=>setTodoMsg(e.target.value)} />
      <button onClick={() => dispatch(updateTodo({id:todo.id, text: todoMsg}))}>Edit</button>
    </div>
  )
}

export default TodoItem