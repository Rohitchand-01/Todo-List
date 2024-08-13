import React from 'react'
import './Mainbox.css'

const Mainbox = () => {
  return (
    <div className='mainbox'>
        <h1>Todo list</h1>
        <div className='task'>
        <input className='addtask' type='text' placeholder='Add a new task' />
        <button>Add</button>
        </div>
        
      
    </div>
  )
}

export default Mainbox
