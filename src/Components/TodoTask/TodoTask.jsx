import React from 'react'
import './TodoTask.css'

const TodoTask = (props) => {
  return (
    <div className='container'>
      {
        props.taskList?.map((task, idx) => {
            return (
                <div>
                    {task} <button onClick={() => {
                        props.setTaskList(prev => [
                            ...prev.filter((_, index) => index !== idx)
                        ])
                    }}>delete</button>
                </div>
            )
        })
      }
    </div>
  )
}

export default TodoTask
