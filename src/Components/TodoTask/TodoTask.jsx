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
                props.setTaskList(prev => {
                  const res=  confirm("Task deleted")
                  if(!res) {
                    return prev
                  }
                  localStorage.setItem("Task", [...prev.filter((_, index) => index !== idx)])
                  return [
                    ...prev.filter((_, index) => index !== idx)
                  ]
                })
              }}><MdDelete /></div>
            </div>
          )
        })
      }
    </div>
  )
}

export default TodoTask
