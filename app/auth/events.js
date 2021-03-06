const authUi = require('./ui.js')
const authApi = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onSignUp = 
function (event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    authApi.signUp(data)
    .then(() => authUi.onSignUpSuccess())
    .catch(() => authUi.onSignUpFailure())
}

const onSignIn =
function (event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    authApi.signIn(data)
        .then((response) => authUi.onSignInSuccess(response))
        // .then index workouts
        .catch(() => authUi.onSignInFailure())
}

const onChangePassword =
function (event) {
    event.preventDefault()
    const form = event.target
    const data = getFormFields(form)
    authApi.changePassword(data)
        .then(() => authUi.onChangePasswordSuccess())
        .catch(() => authUi.onChangePasswordFailure())
}

const onSignOut =
function () {
    authApi.signOut()
        .then(() => authUi.onSignOutSuccess())
        .catch(() => authUi.onSignOutFailure())
}

const onShowSignIn = function () {
    $('#sign-in').show()
    $('#sign-up').hide()
}

const onShowSignUp = function () {
    $('#sign-up').show()
    $('#sign-in').hide()
}

module.exports = {
    onSignUp,
    onSignIn,
    onChangePassword,
    onSignOut,
    onShowSignIn,
    onShowSignUp
}
