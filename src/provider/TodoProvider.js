import {createContext, useContext, useState} from "react"

// 1. Context banane ka variable                  (TodoContext)
// 2. Sari functionalities provide karne ka alag  (TodoProvider)
// 3. Un Properties ko share karne ka             (useTodoContext)
// 4. Konse component ko share karwana h          (TodoProvider)

// Creating an object of 'createContext()'
const TodoContext = createContext()

// Dummy data
const initialTodoListState = ["Todo item for demo purpose 1"]

const TodoProvider = ({children}) => {
  // Initializing dummy value to 'todoList' array
  const [todoList, setTodoList] = useState([initialTodoListState])

  // size of 'todoList' array (function)
  const getNumberOfTodoItems = () => todoList.length

  // Add new Todo item (function)
  const addTodo = (newTodoItem) => {
    setTodoList([...todoList, newTodoItem])
  }

  // Remove Todo item (function)
  const removeTodo = (todoIndex) => {
    // 'newList' is the new array the contains all items except that particular 'index' that need to be removed
    const newList = todoList.filter((_, index) => index !== todoIndex)

    // 'newList' ko 'todoList' me initialize kar dia
    setTodoList(newList)
  }

  // All the things(properties) we need to share
  const contextValue = {
    // variable
    todoList,
    // functions
    getNumberOfTodoItems,
    addTodo,
    removeTodo,
  }

  return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
}

// 'useTodoContext' - used to share the properties
export const useTodoContext = () => useContext(TodoContext)

export default TodoProvider
