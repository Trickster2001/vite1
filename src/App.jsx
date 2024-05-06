import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

const App = () => {
  return (
    <Provider store={store}>
    <div className='min-h-screen bg-gray-400'>
      <TodoForm />
      <Todos />
      </div>
    
    </Provider>
  )
}

export default App