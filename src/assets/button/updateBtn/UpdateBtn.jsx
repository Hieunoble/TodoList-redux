import React from 'react'

const UpdateBtn = ({...props}) => {
  return (
    <div>
      <input
        type="button"
        value={'Update Task'}
        onClick={() => {
          props.handleUpdateItem({id: props.itemTodo.id, title: props.text.trim()})
        }}
      />
    </div>
  )
}

export default UpdateBtn