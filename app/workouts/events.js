const workoutUi = require('./ui.js')
const workoutApi = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onAddWorkout = function (event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    workoutApi.addWorkout(data)
    .then(() => workoutApi.viewWorkouts())
    .then((response) => workoutUi.onViewWorkoutsSuccess(response))
    .then(() => workoutUi.onAddWorkoutSuccess())
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
    const workoutId = data.workout.id
    workoutApi.updateWorkout(data, workoutId)
    .then(() => workoutApi.viewWorkouts())
    .then((response) => workoutUi.onViewWorkoutsSuccess(response))
    .then(() => workoutUi.onUpdateWorkoutSuccess(workoutId))
    .catch(() => workoutUi.onUpdateWorkoutFailure(workoutId))
}

const onEditWorkoutButton = function (event) {
    const workoutId = $(event.target).data('id')
    $('#form-' + workoutId).show()
    $('#workout-' + workoutId).hide()
    $('#edit-button-' + workoutId).hide()
}

const onDeleteWorkoutButton = function (event) {
    const workoutId = $(event.target).data('id')
    workoutApi.deleteWorkout(workoutId)
    .then(() => workoutApi.viewWorkouts())
    .then((response) => workoutUi.onViewWorkoutsSuccess(response))
    .then(() => workoutUi.onDeleteWorkoutSuccess())
    .catch(() => workoutUi.onDeleteWorkoutFailure())
}

module.exports = {
    onAddWorkout,
    onAddExerciseField,
    onViewWorkouts,
    onUpdateWorkout,
    onEditWorkoutButton,
    onDeleteWorkoutButton
}
