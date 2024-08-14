import React from 'react'
import './TodoTask.css'
import { MdDelete } from "react-icons/md";

const TodoTask = (props) => {
  return (
    props.taskList?.length > 0 && <div className='container'>
      {
        props.taskList?.map((task, idx) => {
          return (
            <div className='todo'>
              {task} <div onClick={() => {
                props.setTaskList(prev => [
                  ...prev.filter((_, index) => index !== idx)
                ])
              }}><MdDelete /></div>
            </div>
          )
        })
      }
    </div>
  )
}

export default TodoTask
