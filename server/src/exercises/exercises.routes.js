module.exports = app => {

    const ExerciseController = require('./exercises.controller')

    app.route('/exerciseRows')
        .get(ExerciseController.getExercises)
        
    app.route('/exercise')
        .post(ExerciseController.createExercise)
        
    app.route('/exercise/:id')
        .put(ExerciseController.addExercise)
    
    app.route('/routine')
        .get(ExerciseController.getRoutine)
    
    app.route('/routine/:id')
        .delete(ExerciseController.deleteExercise)
        
}