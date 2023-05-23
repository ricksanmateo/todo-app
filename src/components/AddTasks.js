import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

function AddTasks(props) {

  const [task, setTask] = useState('')

  function addNewTaskHandler(e) {
    e.preventDefault()

    const newTask = {
      "task_name": task,
      "status": "pending",
      "id": uuidv4()
    }
    props.onAddTask(newTask)

    resetInputFields();
  }

  function resetInputFields() {
    setTask('')
  }

  function changeTaskHandler(e) {
    setTask(e.target.value)
  }

  return (
    <div>
      <form onSubmit={addNewTaskHandler}>
        <input 
          required
          id='task'
          value={task}
          name='task'
          placeholder='Add Task Here...'
          onChange={changeTaskHandler}
        />
        <button>Add Task</button>
      </form>
    </div>
  )
}

export default AddTasks
