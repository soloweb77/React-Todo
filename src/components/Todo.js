import React from 'react'
import EditButton from '@mui/icons-material/Edit'
import DeleteButton from '@mui/icons-material/Delete'

function Todo({ task, deleteTodo, editTodo, toggleComplete }) {

  return (
    <div className='Todo'>
      <p className={`${task.completed ? 'completed' : ''}`} onClick={() => toggleComplete(task.id)} >{task.task}</p>
      <div >
        <EditButton onClick={() => editTodo(task.id)} />
        <DeleteButton onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  )
}

export default Todo
