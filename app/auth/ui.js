const store = require('../store.js')

const onSignUpSuccess = function () {
    $('#auth-display').html('<p class="success">User sign up successful! User not signed in, please make sure to do so before proceeding.</p>')
    $('form').trigger('reset')
}

const onSignUpFailure = function () {
    $('#auth-display').html('<p class="failure">Error when signing up</p>')
}

const onSignInSuccess = function (response) {
    store.user = response.user
    $('#auth-display').html('<br><p class="display-text success"><i>User sign in successful!</i></p>')
    $('.display-text').fadeOut(6000)
    $('form').trigger('reset')
    $('#workouts').show()
    $('.nav-link').show()
    $('#account-management').hide()
}

const onSignInFailure = function () {
    $('#auth-display').html('<p class="failure">Error signing in.</p>')
}

const onChangePasswordSuccess = function () {
    $('#auth-display').html('<br><p class="display-text success"><i>Password changed successfully!</i></p>')
    $('.display-text').fadeOut(6000)
    $('form').trigger('reset')
    $('#account-management').hide()
    $('#workouts').show()
}

const onChangePasswordFailure = function () {
    $('#auth-display').html('<p class="failure">Error changing password.</p>')
}

const onSignOutSuccess = function () {
    $('#auth-display').html('<p class="display-text success">Sign out successful!</p>')
    $('.display-text').fadeOut(6000)
    $('form').trigger('reset')
    $('#account-management').show()
    $('#sign-in').show()
    $('#workouts').hide()
    $('#change-password').hide()
    $('.nav-link').hide()
    $('#my-workouts-display').empty()
}

const onSignOutFailure = function () {
    $('#auth-display').html('<p class="failure">Error signing out.</p>')
}

module.exports = {
    onSignUpSuccess,
    onSignUpFailure,
    onSignInSuccess,
    onSignInFailure,
    onChangePasswordSuccess,
    onChangePasswordFailure,
    onSignOutSuccess,
    onSignOutFailure
}
