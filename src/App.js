import React, {useState} from "react"
import "./App.css"
import AllTasks from "./components/AllTasks"
import {useTodoContext} from "./provider/TodoProvider"

function App() {
  const [localTask, setLocalTask] = useState("")

  const {addTodo, todoList} = useTodoContext()

  return (
    <div className="container">
      <h1 id="header">TodoMatic</h1>
      <div className="card">
        <div className="new-item">
          {/* New task input field */}
          <input
            id="input-field"
            type="text"
            value={localTask}
            placeholder="Enter new task date here...."
            onChange={(e) => {
              setLocalTask(e.target.value)
            }}
          />

          {/* Submit button */}
          <button
            className="add-button"
            type="submit"
            onClick={() => {
              addTodo(localTask)
              setLocalTask("")
            }}>
            Add
          </button>
        </div>

        {/* All tasks */}
        <AllTasks arr={todoList} />
      </div>
    </div>
  )
}

export default App
