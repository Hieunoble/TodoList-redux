import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Input from './assets/components/inputTodo/Input'
import List from './assets/components/listTodo/List'
import TodoRefactor from './assets/features/todoReafactor/TodoRefactor'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <TodoRefactor />
    </div>
  )
}

export default App
