'use client'
import React, {useState} from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const EditTodoForm = ({editTodo, task} : any) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e : any) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
      };
  return (
    <>
    <h3 className=' text-center mb-4 font-mono font-bold text-2xl text-white'>Update Todo </h3>
    <form onSubmit={handleSubmit} className="TodoForm border-l-indigo-500">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className=' todo-btn '>Update  Task</button>
  </form>
  </>
  )
}
