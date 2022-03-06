const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

//const usersRouter = require('./controllers/users')
//const loginRouter = require('./controllers/login')
const config = require('./utils/config')
//const middleware = require('./utils/middleware')

mongoose.connect(config.MONGODB_URI)//, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const app = express()
app.use(cors())
app.use(express.json())

//app.use(middleware.tokenExtractor)
//app.use(middleware.errorHandler)

//app.use('/api/users', usersRouter)

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
  
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/data', (req, res) => {
    res.json(test_data)
})

module.exports = app
