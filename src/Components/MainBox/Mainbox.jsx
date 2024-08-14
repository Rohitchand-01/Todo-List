import React, { useState } from 'react'
import './Mainbox.css'

const Mainbox = (props) => {
  const [value, setValue] = useState("")
  return (
    <div className='mainbox'>
        <h1>Todo list</h1>
        <div className='task'>
        <input value={value} onChange={(e) => setValue(e.target.value)} className='addtask' type='text' placeholder='Add a new task' />
        <button onClick={()=>{
          props.setTaskList(prev => [
            ...prev, value
          ])
          setValue("")
        }}>Add</button>
        </div>      
    </div>
  )
}

export default Mainbox
