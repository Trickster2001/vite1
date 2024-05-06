import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

const TodoItem = ({ todo }) => {

  const [todoMsg, setTodoMsg] = useState(todo.text)

  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();

  const update = () => {
    dispatch(updateTodo({id:todo.id, text:todoMsg}))
    setEdit(false)
  }

  return (
    <>
      <div className="w-fit min-w-[150px] min-h-[150px] bg-white px-5 py-4">
        <div
          className="border-black border-b-[0.5px] mb-2 flex justify-end gap-4"
        >
          <button className="text-2xl text-green-500" onClick={()=>setEdit(true)}>{edit ? "?" : "!"}</button>
          <button onClick={update}>save</button>
          <button className="text-2xl text-red-500" onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </div>
        <div>
          <input className="outline-none" type="text" value={todoMsg} onChange={(e)=>setTodoMsg(e.target.value)} readOnly={!edit} />
        </div>
      </div>
    </>
  );
};

export default TodoItem;
