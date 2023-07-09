import React, { useState } from 'react'
import Input from '../../components/inputTodo/Input'
import List from '../../components/listTodo/List'
import Footer from '../../components/footer/Footer.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, completedTodo, updateTodo, showCompletedTask, completedAllTasks, deleteCompletedTasks } from '../../store/todoSlice/todoSlice'

const TodoRefactor = () => {

  //Lấy data từ store 
  const todoList = useSelector((state => {
    return state.todoList.listTodo
  }))

  //Sử dụng dispatch 
  const dispatch = useDispatch()
  const [titleTodo, setTitleTodo] = useState('')
  const [isCompleted, setIsCompleted] = useState(false)
  const [edit, setEdit] = useState(false)
  const [text, setText] = useState('')
  const [identifyItem, setIdentifyItem] = useState(null)
  const [isActive, setIsActive] = useState(false)

  const handleAddTodo = () => {
    const todoNew = {
      id: todoList.length + 1,
      title: titleTodo,
      completed: isCompleted,
    }
    dispatch(addTodo(todoNew))
    setTitleTodo('')
  }
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id))
  }
  const handleCompleteTodo = (id) => {
    setIsCompleted(!isCompleted)
    dispatch(completedTodo(id))
  }
  const handleEditTodo = (id) => {
    setEdit(!edit)
    setIdentifyItem(id)
  }
  const handleUpdateItem = (id, title) => {
    dispatch(updateTodo(id, title))
    setEdit(false)
    // if (title === undefined) {
    //   setText(title)
    // }
  }
  const handleCancelEdit = (id) => {
    setEdit(!edit)
    setText('')
    setIdentifyItem(id)
  }
  const handleShowCompletedTask = () => {
    setIsActive(!isActive)
    dispatch(showCompletedTask())
    // console.log(e.target.value);
  }
  const handleCompletedAllTask = () => {
    setIsCompleted(!isCompleted)
    dispatch(completedAllTasks())
  }
  const handleDeleteCompletedTask = () => {
    dispatch(deleteCompletedTasks())
  }
  return (
    <div>
      <div
        style={{ padding: 10 }}
      >
        <Input
          titleTodo={titleTodo}
          setTitleTodo={setTitleTodo}
          handleAddTodo={handleAddTodo}
        />
      </div>
      <div
        style={{ padding: 10 }}
      >
        {todoList && todoList.map((itemTodo) =>
        (
          <List
            key={itemTodo.id}
            itemTodo={itemTodo}
            handleCompleteTodo={handleCompleteTodo}
            isCompleted={isCompleted}
            setIsCompleted={setIsCompleted}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
            edit={edit}
            setEdit={setEdit}
            text={text}
            setText={setText}
            identifyItem={identifyItem}
            handleUpdateItem={handleUpdateItem}
            handleCancelEdit={handleCancelEdit}

          />
        )
        )}

        <Footer
          handleShowCompletedTask={handleShowCompletedTask}
          isActive={isActive}
          setIsActive={setIsActive}
          handleCompletedAllTask={handleCompletedAllTask}
          handleDeleteCompletedTask={handleDeleteCompletedTask}
        // itemTodo={itemTodo}
        />
      </div>
    </div>
  )
}

export default TodoRefactor