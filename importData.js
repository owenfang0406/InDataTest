// Import the required modules
const fs = require("fs")
const mysql = require("mysql2")

// Read the JSON file
const jsonData = fs.readFileSync("players.json", "utf8")
const data = JSON.parse(jsonData)

const connection = mysql.createConnection({
  host: "localhost", // replace with your MySQL host
  user: "root", // replace with your MySQL username
  password: "Ppp0935082190", // replace with your MySQL password
  database: "nba", // replace with your MySQL database name
})

// Connect to the MySQL server
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL:", error)
    return
  }

  console.log("Connected to MySQL server.")

  // Insert data into MySQL table
  const tableName = "players"
  data.forEach((item) => {
    connection.query(`INSERT INTO ${tableName} SET ?`, item, (err, result) => {
      if (err) {
        console.error("Error inserting data:", err)
        return
      }

      console.log("Data inserted:", result)
    })
  })

  // Close the MySQL connection
  connection.end((err) => {
    if (err) {
      console.error("Error closing MySQL connection:", err)
      return
    }

    console.log("MySQL connection closed.")
  })
})
