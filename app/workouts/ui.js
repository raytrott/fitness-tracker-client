const workoutEvents = require('./events.js')
const store = require('../store.js')

const onAddWorkoutSuccess = function (response) {
    $('#add-workout-display').html(`
        <p class="workout-display-text"><i>Workout added.</i></p><br>
    `)
    store.workout = response.workout
    store.workoutId = response.workout._id
    $('form').trigger('reset')
}

const onAddWorkoutFailure = function () {
    $('#workouts-display').html('<p>Error adding workout.</p>')
}

const onViewWorkoutsSuccess = function (response) {
    let workoutsHtml = ''
    response.workouts.forEach((workout) => {
        workoutsHtml += `
            <div>
            <p>__________</p><br>
            <p>${workout.date.substring(0,10)}</p>
            <h4>${workout.name}</h4>
            <p>ID #${workout._id}</p>
            <p>Type: ${workout.type}</p>
            <p>Exercise(s) performed:<br>
            ${workout.exercises}</p>
            </div>
        `
    })
    $('#my-workouts-display').html(workoutsHtml)
}

const onViewWorkoutsFailure = function () {
    $('#workouts-display').html('<p>Error displaying workouts.</p>')
}

const onUpdateWorkoutSuccess = function () {
    $('#update-workout-display').html(`
        <p class="workout-display-text"><i>Workout updated.</i></p><br>
    `)
    $('form').trigger('reset')
}

const onUpdateWorkoutFailure = function () {
    $('#update-workout-display').html('<p>Error updating workout.</p>')
}

const onDeleteWorkoutSuccess = function () {
    $('#delete-workout-display').html(`
        <p class="workout-display-text"><i>Workout deleted. Click View My Workouts to see updated list.</i></p><br>
    `)
    $('form').trigger('reset')
}

const onDeleteWorkoutFailure = function () {
    $('#delete-workout-display').html('<p><i>Error deleting workout.</i></p>')
}

module.exports = {
    onAddWorkoutSuccess,
    onAddWorkoutFailure,
    onViewWorkoutsSuccess,
    onViewWorkoutsFailure,
    onUpdateWorkoutSuccess,
    onUpdateWorkoutFailure,
    onDeleteWorkoutSuccess,
    onDeleteWorkoutFailure
}
