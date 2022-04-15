const store = require('../store.js')

const onAddWorkoutSuccess = function (response) {
    $('#workouts-display').html('<p>Workout added.</p>')
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
    $('#my-workouts-display').append('<div class="col-3 box border border-4">',response,'</div>')
}

const onViewWorkoutsFailure = function () {
    $('#workouts-display').html('<p>Error displaying workouts.</p>')
}

module.exports = {
    onAddWorkoutSuccess,
    onAddWorkoutFailure,
    onViewWorkoutsSuccess,
    onViewWorkoutsFailure
}
