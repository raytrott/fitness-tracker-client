const store = require('../store.js')
const config = require('../config.js')

const addWorkout = function (data) {
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/workouts',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data
    })
}

const viewWorkouts = function () {
    return $.ajax({
        method: 'GET',
        url: config.apiUrl + '/workouts',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

const showWorkout = function (workoutId) {
    return $.ajax({
        method: 'GET',
        url: config.apiUrl + '/workouts/' + workoutId,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

const updateWorkout = function (data, id) {
    return $.ajax({
        method: 'PATCH',
        url: config.apiUrl + '/workouts/' + id,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data
    })
}

const deleteWorkout = function (id) {
    return $.ajax({
        method: 'DELETE',
        url: config.apiUrl + '/workouts/' + id,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

module.exports = {
    addWorkout,
    viewWorkouts,
    showWorkout,
    updateWorkout,
    deleteWorkout
}
