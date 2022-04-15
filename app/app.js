const authEvents = require('./auth/events.js')
const workoutEvents = require('./workouts/events.js')

// Auth
$(() => {
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
})

// Fitness Tracker
$(() => {
  $('#add-workout-form').on('submit', workoutEvents.onAddWorkout)
  $('#add-exercise').on('click', workoutEvents.onAddExerciseField)
  $('#view-workouts').on('click', workoutEvents.onViewWorkouts)
  $('.update-workout').on('submit', workoutEvents.onUpdateWorkout)
  $('.delete-workout').on('submit', workoutEvents.onDeleteWorkout)
})
