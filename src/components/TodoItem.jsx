import React, { useState } from 'react'
import {BiSolidEditAlt, BiSolidTrash, BiSolidSave} from 'react-icons/bi'
import { useTodo } from '../contexts';

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        
        <div 
            className={`flex shadow-sm shadow-slate-300 px-3 py-3 gap-x-3  ${
                todo.completed ? " text-rose-400" : " "
            }`}
        >
            <input
                type="checkbox"
                className="my-3 w-6 h-6 "
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
           
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg justify-center items-center shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? <BiSolidSave className='text-2xl text-lime-500 shadow-gray-200 rounded-lg hover:bg-[#2f2a2a14]  hover:text-3xl'/>
                 : <BiSolidEditAlt className='text-2xl text-yellow-500 shadow-gray-200 rounded-lg hover:bg-[#2f2a2a14]  hover:text-3xl' />}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm justify-center items-center text-[#ffffff]  shrink-0 "
                onClick={() => deleteTodo(todo.id)}
            >
                <BiSolidTrash className='text-2xl text-rose-500  shadow-gray-200 rounded-lg hover:bg-[#2f2a2a14]  hover:text-3xl '/>
            </button>
        </div>
    );
}

export default TodoItem;
