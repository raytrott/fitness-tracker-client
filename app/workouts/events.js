const workoutUi = require('./ui.js')
const workoutApi = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onAddWorkout = function (event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    // console.log(data)
    workoutApi.addWorkout(data)
    .then((response) => workoutUi.onAddWorkoutSuccess(response))
    .catch(() => workoutUi.onAddWorkoutFailure())
}

const onAddExerciseField = function () {
    $('#workout-exercise-input').append(`
        <br><br><input name="workout[exercises]" class="workout-exercise-field" type="text" placeholder="exercise name">
        `
    )
}

const onViewWorkouts = function () {
    workoutApi.viewWorkouts()
    .then((response) => workoutUi.onViewWorkoutsSuccess(response))
    .catch(() => workoutUi.onViewWorkoutsFailure())
}

const onUpdateWorkout = function (event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    workoutApi.updateWorkout(data, data.workout.id)
    .then(() => workoutUi.onUpdateWorkoutSuccess())
    .catch(() => workoutUi.onUpdateWorkoutFailure())
}

const onDeleteWorkout = function (event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    workoutApi.deleteWorkout(data.id)
    .then(() => workoutUi.onDeleteWorkoutSuccess())
    .catch(() => workoutUi.onDeleteWorkoutFailure())
}

module.exports = {
    onAddWorkout,
    onAddExerciseField,
    onViewWorkouts,
    onUpdateWorkout,
    onDeleteWorkout
}
