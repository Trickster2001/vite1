import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{id:1, text:"Hello"}]
}

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {id:nanoid(), text:action.payload}
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((eachTodo) => (eachTodo.id !== action.payload))
    },
    updateTodo: (state, action) => {
      const {id, text} = action.payload
      state.todos = state.todos.map((each)=> (each.id===id ? {...each, text: text} : each))
    }
  }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer