import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mainbox from './Components/MainBox/Mainbox'
import TodoTask from './Components/TodoTask/TodoTask'
// import Signup from './Components/Signup/Signup'

function App() {
  console.log(localStorage.getItem("Task"))
  if(!localStorage.getItem("Task")) {
    localStorage.setItem("Task", [])
  }
  const [taskList, setTaskList] = useState(Array.from(localStorage.getItem("Task"))?.join("")?.split(",")|| [])

  return (
    <>
      {/* <Signup/> */}
      <Mainbox taskList={taskList} setTaskList={setTaskList}/>
      <TodoTask taskList={taskList} setTaskList={setTaskList}/>
    </>
  )
}

export default App
