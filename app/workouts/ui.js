const workoutEvents = require('./events.js')
const store = require('../store.js')

const onAddWorkoutSuccess = function (response) {
    $('#add-workout-display').html(`
        <p class="workout-display-text"><i>Workout added.</i></p><br>
    `)
    console.log(response)
    store.workout = response.workout
    store.workoutId = response.workout._id
    $('form').trigger('reset')
}

const onAddWorkoutFailure = function () {
    $('#workouts-display').html('<p>Error adding workout.</p>')
}

const onViewWorkoutsSuccess = function (response) {
    console.log(response)
    let workoutsHtml = ''
    response.workouts.forEach((workout) => {
        workoutsHtml += `
            <div>
            <p>__________</p><br>
            <h4>${workout.name} - ${workout.date}</h4>
            <p></p>ID #${workout._id}</p>
            <p>Type: ${workout.type}</p>
            <p>Exercise(s) performed:<br>
            ${workout.exercises}</p>
            </div>
        `
    })
    $('#my-workouts-display').html(workoutsHtml)
}

const onShowDeleteListeners = function () {
    $('.show-workout').delay(500).on('click', workoutEvents.onShowWorkout)
    $('.delete-workout').on('click', workoutEvents.onDeleteWorkout)
}

const onViewWorkoutsFailure = function () {
    $('#workouts-display').html('<p>Error displaying workouts.</p>')
}

//             <button class="edit-workout" data-id=${workout._id}>Edit</button>

const onShowWorkoutSuccess = function (response) {
    console.log(response)
    // pull  workout.type   workout.exercises  from response
    // then display them
    // if dataset.id matches with workout id then add html to that div
    let workoutHtml = ''
    response.workouts.forEach((workout) => {
        workoutHtml += `
            <div>
            <h4>${workout.name}</h4>
            <p>${workout.date}</p>
            
            <button class="show-workout" data-id=${workout._id}>Show</button>
            <div class="workout-details"></div>
            <div class="update-workout"></div>
            <button class="delete-workout" data-id=${workout._id}>Delete</button>
            </div><br>
        `
    })
    $('#my-workouts-display').html(workoutsHtml)
}

const onShowWorkoutFailure = function () {
    $('#workouts-display').html('<p>Error displaying workouts.</p>')
}

const onUpdateWorkoutSuccess = function (response) {
    $('#update-workout-display').html(`
        <p class="workout-display-text"><i>Workout updated.</i></p><br>
    `)
    console.log(response)
    $('form').trigger('reset')
}

const onUpdateWorkoutFailure = function () {
    $('#update-workout-display').html('<p>Error updating workout.</p>')
}

const onDeleteWorkoutSuccess = function (response) {
    $('#delete-workout-display').html(`
        <p class="workout-display-text"><i>Workout deleted. Click View My Workouts to see updated list.</i></p><br>
    `).fadeIn(500)
    console.log(response)
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
    onShowWorkoutSuccess,
    onShowWorkoutFailure,
    onShowDeleteListeners,
    onUpdateWorkoutSuccess,
    onUpdateWorkoutFailure,
    onDeleteWorkoutSuccess,
    onDeleteWorkoutFailure
}
