import React, { useEffect } from "react"
import { callPlayers } from "./APIs"
import "./App.css"
import NavBar from "./Components/NavBar/NavBar"
import SubNavBar from "./Components/SubNavBar/SubNavBar"

function App() {
  useEffect(() => {
    callPlayers()
  }, [])
  return (
    <div className="App">
      <NavBar></NavBar>
    </div>
  )
}

export default App
