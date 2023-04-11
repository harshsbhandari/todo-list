import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import TodoProvider from "./provider/TodoProvider"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    {/* Sharing the context to 'App.js' */}
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
)
