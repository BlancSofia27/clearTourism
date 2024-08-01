import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Tourism from "./views/Tourism"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Tourism" />} />
        <Route path="/Tourism" element={<Tourism/>} />
      </Routes>
    </Router>
  )
}

export default App
