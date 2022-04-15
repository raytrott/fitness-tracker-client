const store = require('../store.js')
const config = require('../config.js')
// config.apiUrl

const signUp = function (data) {
    return $.ajax({
        method: 'POST',
        url: 'http://localhost:4741' + '/sign-up',
        data
    })
}

const signIn = function (data) {
    return $.ajax({
        method: 'POST',
        url: 'http://localhost:4741' + '/sign-in',
        data
    })
}

const changePassword = function (data) {
    return $.ajax({
        method: 'PATCH',
        url: 'http://localhost:4741' + '/change-password',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data
    })
}

const signOut = function () {
    return $.ajax({
        method: 'DELETE',
        url: 'http://localhost:4741' + '/sign-out',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

module.exports = {
    signUp,
    signIn,
    changePassword,
    signOut
}
