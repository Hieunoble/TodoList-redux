import React from 'react'

const CancelBtn = ({ ...props }) => {
  return (
    <div>
      <input
        type="button"
        value={'Cancel'}
        onClick={() => {
          props.handleCancelEdit(props.itemTodo.id)
        }}
      />
    </div>
  )
}

export default CancelBtn