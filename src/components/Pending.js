import React from 'react'

function Pending(props) {
  const pendingTasks = props.tasks.filter(task => task.status === 'pending')

  const deleteTaskHandler = (id) => {
    props.onDeleteTask(id)
  }

  const doneTaskHandler = (id) => {
    props.onDoneTask(id)
  }
  return (
    <div>
      <h2>Pending Task</h2>
      {/* {
        pendingTasks.map(task => {
          return (
            <div>
              <li>{task.task_name}</li>
              <button onClick={() => deleteTaskHandler(task.id)}>Delete</button>
            </div>
          )
        })
      } */}
      {
        pendingTasks.length > 0 ? (
          pendingTasks.map(task => {
            return (
              <div>
              <li>{task.task_name}</li>
              <button onClick={() => deleteTaskHandler(task.id)}>Delete</button>
              <button onClick={() => doneTaskHandler(task.id)}>Done</button>
            </div>
            )
          })
        ) : (
          <h4 style={{color: "red"}}>No pending task</h4>
        )
      };
    </div>
  )
}

export default Pending
