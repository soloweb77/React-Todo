import React, { useState } from 'react'

function EditTodoForm({ editTodo, task }) {
  const [value, setValue] = useState('')


  const handleChange = (e) => {

    e.preventDefault()
    editTodo(value, task.id)
  }

  return (
    <form className='TodoForm' onSubmit={handleChange}>
      <input value={value} onChange={(e) => setValue(e.target.value)} className='todo-input' plaaceholder='what id today task' />
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default EditTodoForm
