const authEvents = require('./auth/events.js')
const trackerEvents = require('./tracker/events.js')

// Auth
$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
})

// Fitness Tracker
$(() => {
  $('#add-workout').on('submit', trackerEvents.onAddWorkout)
})
