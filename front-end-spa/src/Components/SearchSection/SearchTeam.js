import React, { useContext } from "react"
import { playersContext } from "../../App"

function SearchTeam() {
  const { allTeams } = useContext(playersContext)
  return (
    <label>
      Team:
      <select>
        {allTeams && allTeams.map((team, i) => <option key={i}>{team}</option>)}
      </select>
    </label>
  )
}

export default SearchTeam
