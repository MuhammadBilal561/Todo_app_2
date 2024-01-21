'use client'

import React, {useState} from 'react'

export const TodoForm = ({addTodo} :any) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e : any) => {
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todo
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (<>

    <h3 className='font-bold text-white mb-1 text-center  text-3xl shadow-sm font-mono'>To<span className='text-cyan-700'>do</span> Li<span className='text-cyan-700'>st</span></h3>

    <form onSubmit={handleSubmit} className="TodoForm mt-6">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Enter your Task' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  </>
  )
}
