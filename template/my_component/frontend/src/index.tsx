import React from "react"
import ReactDOM from "react-dom"
import { ErrorBoundary } from "streamlit-component-lib-react-hooks"
import MyComponent from "./MyComponent"

ReactDOM.render(
  <React.StrictMode>
    {/* Using <ErrorBoundary /> is optional, but useful for showing errors */}
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
)
