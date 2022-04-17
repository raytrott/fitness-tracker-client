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
    $('#workout-exercise-input').append(`
        <br><br><input name="workout[exercises]" class="workout-exercise-field" type="text" placeholder="exercise name">
        `
    )
}

const onViewWorkouts = function () {
    workoutApi.viewWorkouts()
    .then((response) => workoutUi.onViewWorkoutsSuccess(response))
    .then(() => workoutUi.onShowDeleteListeners())
    .catch(() => workoutUi.onViewWorkoutsFailure())
}

const onShowWorkout = function (event) {
    console.log('click')
    const workout = event.target
    console.log(workout)
    const workoutId = workout.dataset.id
    console.log(workoutId)

    workoutApi.showWorkout(workoutId)
    .then((response) => workoutUi.onShowWorkoutSuccess(response))
    .catch(() => workoutUi.onShowWorkoutFailure())
}

const onEditWorkout = function () {

}

const onUpdateWorkout = function (event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    console.log(data)
    
    workoutApi.updateWorkout(data, data.workout.id)
    .then((response) => workoutUi.onUpdateWorkoutSuccess(response))
    .catch(() => workoutUi.onUpdateWorkoutFailure())
}

const onDeleteWorkout = function (event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    console.log(data)
    workoutApi.deleteWorkout(data.id)
    .then((response) => workoutUi.onDeleteWorkoutSuccess(response))
    .catch(() => workoutUi.onDeleteWorkoutFailure())
}

module.exports = {
    onAddWorkout,
    onAddExerciseField,
    onViewWorkouts,
    onShowWorkout,
    onEditWorkout,
    onUpdateWorkout,
    onDeleteWorkout
}
