import React, { useContext } from 'react'
import { MyContext } from './MyContext'

function DoneTasks() {
  const { tasks } = useContext(MyContext)

  const doneTasks = tasks.filter(task => task.status === "done")


  return (
    <div>
      <h2>Done Tasks</h2>
      {/* {
        doneTasks.map(task => {
          return (
            <div>
              <li>{task.task_name}</li>
            </div>
          )
        })
      } */}
      {
        doneTasks.length > 0 ? (
          doneTasks.map(task => {
            return (
              <div>
                <li>{task.task_name}</li>
              </div>
            )
          })
        ) : (
          <h4>Hey, Let's finnish some pending task</h4>
        )
      }
    </div>
  )
}

export default DoneTasks
