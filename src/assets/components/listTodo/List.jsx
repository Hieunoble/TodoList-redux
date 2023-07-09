import React from 'react'
import listTodoStyle from './listTodoStyle.css'
import DeleteBtn from '../../button/deleteBtn/DeleteBtn'
import EditBtn from '../../button/editBtn/editBtn'
import UpdateBtn from '../../button/updateBtn/UpdateBtn'
import CancelBtn from '../../button/cancelBtn/CancelBtn'

const List = ({ ...props }) => {
  return (
    <div className='listTodo'>
      {
        props.edit && props.identifyItem === props.itemTodo.id ?
          <div className='listTodo--item'>
            <input
              type='text'
              placeholder='Change your task'
              className={`todo `}
              value={props.text}
              onChange={(e) => props.setText(e.target.value)}
            />
            <div className='option'>
            <UpdateBtn
              handleUpdateItem={props.handleUpdateItem}
              itemTodo={props.itemTodo}
              text={props.text}
            />
            <CancelBtn
              handleCancelEdit={props.handleCancelEdit}
              itemTodo={props.itemTodo}
            />
            <DeleteBtn
              handleDeleteTodo={props.handleDeleteTodo}
              itemTodo={props.itemTodo}
            />
            </div>
          </div>
          :
          <div className='listTodo--item'>
            <div
              onClick={() => { props.handleCompleteTodo(props.itemTodo.id) }}
              className={`title ${props.itemTodo.completed ? 'completed' : ''}`}
            >
              {props.itemTodo.title}
            </div>
            <div className='option'>
            <EditBtn
              handleEditTodo={props.handleEditTodo}
              itemTodo={props.itemTodo}
            />
            <DeleteBtn
              handleDeleteTodo={props.handleDeleteTodo}
              itemTodo={props.itemTodo}
            />
            </div>
          </div>
      }
    </div>
  )
}

export default List