import React, { useState } from 'react'
import AddBtn from '../../button/addBtn/AddBtn'
import InputStyle from './InputStyle.css'

const Input = ({...props}) => {
  return (
    <div>
      <div className='wrapper-input'>
        <input
         type="text" 
         className='input'
         value={props.titleTodo}
         onChange={(e) => props.setTitleTodo(e.target.value)}
        />
        <AddBtn
          handleAddTodo = {props.handleAddTodo}
        />
      </div>
    </div>
  )
}

export default Input