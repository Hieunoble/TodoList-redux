import React from 'react'

const AddBtn = ({ ...props }) => {
  return (
    <div>
      <div>
        <button
          onClick={props.handleAddTodo}
        >Add
        </button>
      </div>
    </div>
  )
}

export default AddBtn