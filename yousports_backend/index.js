const express = require('express')
const app = express()
const cors = require('cors')

let test_data = [
  {
    id: 1,
    username: "test username",
    password: "test password hash",
    teams: ["Lakers", "Warriors"],
    players: []
  },
  {
    id: 1,
    username: "test username 2",
    password: "test password hash 2",
    teams: ["Cavaliers"],
    players: ["Luka Doncic"]
  }
]

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/data', (req, res) => {
  res.json(test_data)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})