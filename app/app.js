const authEvents = require('./auth/events.js')
const workoutEvents = require('./workouts/events.js')

// Auth
$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-link').on('click', authEvents.onSignOut)
  $('#sign-in-link').on('click', authEvents.onShowSignIn)
  $('#sign-up-link').on('click', authEvents.onShowSignUp)
  $('#change-password-link').on('click', () => {
    $('#account-management').show()
    $('#change-password').show()
    $('#sign-in').hide()
    $('#sign-up').hide()
    $('#workouts').hide()
  })
  $('#return-link').on('click', () => {
    $('#account-management').hide()
    $('#change-password').hide()
    $('#sign-in').hide()
    $('#sign-up').hide()
    $('#workouts').show()
  })
})

// Fitness Tracker
$(() => {
  $('#add-workout-form').on('submit', workoutEvents.onAddWorkout)
  $('#add-exercise').on('click', workoutEvents.onAddExerciseField)
  $('#view-all-workouts').on('click', workoutEvents.onViewWorkouts)

  $('.edit-workout').on('click', workoutEvents.onEditWorkout)

  $('.update-workout-form').on('submit', workoutEvents.onUpdateWorkout)
})

//Hide on start
$(() => {
  $('#sign-in').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#workouts').hide()
  $('.nav-link').hide()
})
