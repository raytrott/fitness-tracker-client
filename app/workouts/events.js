const workoutUi = require('./ui.js')
const workoutApi = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onAddWorkout = function (event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    console.log(data)
    workoutApi.addWorkout(data)
    .then((response) => workoutUi.onAddWorkoutSuccess(response))
    .catch(() => workoutUi.onAddWorkoutFailure())
}

const onAddExerciseField = function () {
    $('#workout-exercise-input').append('<br><input name="workout[exercises]" class="workout-exercise-field" type="text" placeholder="exercise name">')
}

const onViewWorkouts = function (event) {
    workoutApi.viewWorkouts()
    .then((response) => workoutUi.onViewWorkoutsSuccess(response))
    .catch(() => workoutUi.onViewWorkoutsFailure())
}

const onUpdateWorkout = function () {

}

const onDeleteWorkout = function () {

}

module.exports = {
    onAddWorkout,
    onAddExerciseField,
    onViewWorkouts,
    onUpdateWorkout,
    onDeleteWorkout
}
