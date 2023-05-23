
import { useState } from 'react';
import './App.css';
import AddTasks from './components/AddTasks';
import Pending from './components/Pending';
import DoneTasks from './components/DoneTasks'
import { MyContext } from './components/MyContext';

import SAMPLE_TASKS from './data/sample-tasks.json'

function App() {
  const [tasks, setTasks] = useState(SAMPLE_TASKS)


  const addTaskHandler = (newTask) => {
    setTasks(prevTasks => [...prevTasks, newTask])
  }
  

  const deleteTaskHandler = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId))
  }

  const doneTaskHandler = (taskId) => {
    setTasks((prevTasks) => 
        prevTasks.map((task) => 
        task.id === taskId ? {...task, status: 'done'} : task
      )
    )
  }
  return (
    <div className="App">
      {
        tasks.map(task => {
          return <div key={task.id}>{task.task_name}</div>
        })
      }

      {/* <AddTasks onAddTask={addTaskHandler}/> */}
      {/* <Pending tasks={tasks} onDeleteTask={deleteTaskHandler}/> */}

      <MyContext.Provider value={{tasks}} >
        <AddTasks onAddTask={addTaskHandler}/>
        <Pending tasks={tasks} onDeleteTask={deleteTaskHandler} onDoneTask={doneTaskHandler}/> 
        <DoneTasks />
      </MyContext.Provider>
    </div>
  );
}

export default App;
