import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mainbox from './Components/MainBox/Mainbox'
import TodoTask from './Components/TodoTask/TodoTask'

function App() {
  const [taskList, setTaskList] = useState([])

  return (
    <>
      <Mainbox taskList={taskList} setTaskList={setTaskList}/>
      <TodoTask taskList={taskList} setTaskList={setTaskList}/>
    </>
  )
}

export default App
