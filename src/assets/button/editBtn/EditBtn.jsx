import React from 'react'

const EditBtn = ({ ...props }) => {
  return (
    <div>
      <input
        type="button"
        value={'Edit'}
        onClick={() => {
          props.handleEditTodo(props.itemTodo.id)
        }}
      />
    </div>
  )
}

export default EditBtn