import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import BgChanger from './components/BgChanger'
import Footer from './components/Footer'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => 
    prev.map((prevTodo) => 
    prevTodo.id === id ? {...prevTodo, 
     completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo,toggleComplete}}>
      {/* bgChanger */}
      <BgChanger/>
      <div className="bg-[#ffffff00] py-2 min-h-screen ">
                <div className="w-full max-w-2xl mx-auto shadow-sm rounded-lg ">
                    <h1 className="text-3xl text-center mb-8 mt-2 ">Manage Your To-Dos </h1>
                    <div className="mb-6 ">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3 rounded-lg shadow-sm shadow-slate-500">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
        </div>
      <Footer/>
    </TodoProvider>
  )
}

export default App
