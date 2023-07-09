import React from 'react'

const DeleteBtn = ({...props}) => {
  return (
    <div className='deleteBtn'>
      <input
        type="button"
        value={'x'}
        onClick={() => { props.handleDeleteTodo(props.itemTodo.id) }}
      />
    </div>
  )
}

export default DeleteBtn