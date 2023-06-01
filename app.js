const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const app = express()
app.use(cors())

// MySQL database connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ppp0935082190",
  database: "nba",
})

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err)
    return
  }
  console.log("Connected to the database")
})

// Define a route to query the players table
app.get("/players", (req, res) => {
  const { sortBy, sortOrder, lastCursor } = req.query
  let query = "SELECT * FROM players"

  if (lastCursor) {
    if (sortOrder === "asc") {
      query += ` WHERE id > ${lastCursor}`
    } else if (sortOrder === "desc") {
      query += ` WHERE id < ${lastCursor}`
    }
  }

  if (sortBy) {
    query += ` ORDER BY ${sortBy}`

    if (sortOrder && (sortOrder === "asc" || sortOrder === "desc")) {
      query += ` ${sortOrder.toUpperCase()}`
    }
  }

  if (lastCursor) {
    // Query all data when lastCursor is not provided
    query += " LIMIT 15"
  }
  // Perform the query
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err)
      res.status(500).json({ error: "Error executing query" })
      return
    }

    let lastCursorId = null
    if (results.length > 0) {
      lastCursorId = results[results.length - 1].id
    }

    res.status(200).json({ players: results, last_cursor: lastCursorId })
  })
})

app.get("/unique-units", (req, res) => {
  const fieldName = req.query.fieldName // Specify the field name for which you want to retrieve unique units

  // Construct the query to fetch unique units
  const query = `SELECT DISTINCT ${fieldName} FROM players`

  // Perform the query
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err)
      res.status(500).json({ error: "Error executing query" })
      return
    }

    const uniqueUnits = results.map((row) => row[fieldName])
    res.json(uniqueUnits)
  })
})

// Start the server
const port = 9999
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
