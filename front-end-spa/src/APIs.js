export const callPlayers = async () => {
  try {
    const results = await fetch(
      "http://localhost:9999/players?sortBy=points_per_game&sortOrder=desc"
    )

    if (results.ok) {
      const resultJson = await results.json()
      console.log(resultJson)
      return resultJson
    } else {
      throw new Error("Failed to fetch player data")
    }
  } catch (error) {
    console.error(error)
  }
}

export const getTeams = async () => {
  try {
    const results = await fetch(
      "http://localhost:9999/unique-units?fieldName=team_name"
    )

    if (results.ok) {
      const resultJson = await results.json()
      console.log(resultJson)
      return resultJson
    } else {
      throw new Error("Failed to fetch player data")
    }
  } catch (error) {
    console.error(error)
  }
}
