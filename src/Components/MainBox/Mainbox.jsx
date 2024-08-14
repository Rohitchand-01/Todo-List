import React, { useState } from 'react'
import './Mainbox.css'

const Mainbox = (props) => {
  const [value, setValue] = useState("")
  return (
    <div className='mainbox'>
        <p className='title'>TODO LIST</p>
        <div className='task'>
        <input value={value} onChange={(e) => setValue(e.target.value)} className='addtask' type='text' placeholder='Add a new task' />
        <button onClick={()=>{
          props.setTaskList(prev => [
            ...prev, value
          ])
          setValue("")
        }}>Add Task</button>
        </div>      
    </div>
  )
}

export default Mainbox
