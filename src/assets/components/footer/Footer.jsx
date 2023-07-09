import React, { useState } from 'react'
// import CompletedTask from './completedTask/CompletedTask'
// import DeleteCompletedTask from './deleteCompletedTask/DeleteCompletedTask'
// import CheckAllTask from './checkAllTask/CheckAllTask'

const Footer = ({ ...props }) => {
  const footerBtn = [
    {
      id: 1,
      name: 'ShowcompletedTask',
      title: 'Show Completed Task',
      active: props.isActive,
    },
    {
      id: 2,
      name: 'checkAllTask',
      title: 'Check All Task',
      active: props.isActive,
    },
    {
      id: 3,
      name: 'deleteCompletedTask',
      title: 'Delete Completed Task',
      active: props.isActive,
    },
  ]
  return (
    <div>
      {
        footerBtn && footerBtn.map((btn) =>
        (
          <button
            key={btn.name}
            // onClick={props.handleShowCompletedTask}
            onClick={props.handleCompletedAllTask}
            // onClick={props.handleDeleteCompletedTask}
          >
            {btn.title}
          </button>
        ))
      }

    </div>
  )
}

export default Footer