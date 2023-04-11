import React from "react"
import {useTodoContext} from "../provider/TodoProvider"

function AllTasks() {
  const {todoList, removeTodo} = useTodoContext()

  return (
    <div className="holder">
      {/* Iterating the todo list */}

      {todoList.map((todo, index) => (
        <div className="data" key={index}>
          {/* printing the todo item list */}
          <div className="item">{todo}</div>

          {/* Button to remove todo item */}
          <button className="remove-button" onClick={() => removeTodo(index)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}

export default AllTasks
