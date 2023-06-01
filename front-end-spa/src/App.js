import React, { createContext, useEffect, useMemo, useState } from "react"
import { callPlayers, getTeams } from "./APIs"
import "./App.css"
import NavBar from "./Components/NavBar/NavBar"
import SearchBar from "./Components/SearchSection/SearchBar"

export const playersContext = createContext({})

function App() {
  const [allTeams, setAllTeams] = useState()
  const [allPlayer, setAllPlayers] = useState()
  const players = useMemo(() => callPlayers(), [])
  const Teams = useMemo(async () => {
    try {
      const teams = getTeams()
      return teams
    } catch (e) {
      console.error(e)
    }
  }, [])
  useEffect(() => {
    Teams.then((res) => setAllTeams(() => res))
    players.then((res) => setAllPlayers(() => res))
  }, [])
  return (
    <playersContext.Provider value={{ players, allTeams }}>
      <div className="App">
        <NavBar></NavBar>
        <SearchBar></SearchBar>
      </div>
      <div className="body"></div>
    </playersContext.Provider>
  )
}

export default App
