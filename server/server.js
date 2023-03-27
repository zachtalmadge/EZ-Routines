const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000
const ExerciseRoutes = require('./src/exercises/exercises.routes')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('public'))

ExerciseRoutes(app)

app.listen(port, () => console.log('===== Express app listening on port 3000 ====='))