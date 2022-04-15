const store = require('../store.js')
const config = require('../config.js')
// config.apiUrl

const addWorkout = function (data) {
    return $.ajax({
        method: 'POST',
        url: 'http://localhost:4741' + '/workouts',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data
    })
}

const viewWorkouts = function (data) {
    return $.ajax({
        method: 'GET',
        url: 'http://localhost:4741' + '/workouts',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data
    })
}

const updateWorkout = function (data) {
    return $.ajax({
        method: 'PATCH',
        url: 'http://localhost:4741' + '/workouts/' + store.workoutId,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data
    })
}

const deleteWorkout = function () {
    return $.ajax({
        method: 'DELETE',
        url: 'http://localhost:4741' + '/workouts/' + store.workoutId,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data
    })
}

module.exports = {
    addWorkout,
    viewWorkouts,
    updateWorkout,
    deleteWorkout
}
