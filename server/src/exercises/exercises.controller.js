const mysql = require('mysql')
const util = require('util')

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "EZRoutines"
})

// node native promisify
const query = util.promisify(connection.query).bind(connection);

// get all exercises
exports.getExercises = async (req, res) => {
    try {
        const rows = await query('SELECT * FROM exercises')
        res.json(rows)
    } 
    catch(e) {
        console.log(e)
        res.status(400).end()
    } 
}

// add exercise to routine
exports.addExercise = (req, res) => {
    connection.query(`INSERT INTO exercises_in_workouts VALUES (null, 1, ${req.params.id})`, (err, OK) => {
        if (err) {
            console.log(err)
            res.status(400).end()
        }
        if (OK) {
            res.sendStatus(200)
        }
    })
}

// get user exercise routine
exports.getRoutine = async (req, res) => {
    try {
        const rows = await query(`SELECT w.exercise_id, e.exercise_name, e.muscle_group, e.sets, e.reps 
                                  FROM exercises_in_workouts as w 
                                  INNER JOIN exercises e 
                                  ON w.exercise_id = e.id;`)
        res.json(rows)
    } 
    catch(e) {
        console.log(e)
        res.status(400).end()
    } 
}

// delete an exercise from user routine ( exercises_in_workouts table )
exports.deleteExercise = (req, res) => {
    connection.query(`DELETE FROM exercises_in_workouts
                      WHERE exercise_id = ${req.params.id}`, (err, OK) => {
                        if (err) {
                            res.status(400).end()
                        }
                        if (OK) {
                            res.sendStatus(200)
                        }
                            })
}


// create a row in exercises table
exports.createExercise = (req, res) => {
    connection.query(`INSERT INTO exercises SET ?`, { 
        exercise_name: req.body.name, 
        muscle_group: req.body.group, 
        sets: req.body.sets, 
        reps: req.body.reps 
    },(err, OK) => {
            if (err) {
                console.log(err)
                res.status(400).end()
            }
            if (OK) {
                res.sendStatus(200)
            }
        })
}