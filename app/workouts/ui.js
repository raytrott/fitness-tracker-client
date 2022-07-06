const onAddWorkoutSuccess = function () {
    $('#add-workout-display').html(`
        <p class="workout-display-text success"><i>Workout added!</i></p><br>
    `)
    $('.workout-display-text').fadeOut(10000)
    $('form').trigger('reset')
}

const onAddWorkoutFailure = function () {
    $('#add-workout-display').html('<p class="failure">Error adding workout.</p>')
}

const onViewWorkoutsSuccess = function (response) {
    let workoutsHtml = ''
    response.workouts.forEach((workout) => {
        workoutsHtml += `
            <div class="workout-container">
            <p>__________</p><br>

                <div id="workout-${workout._id}" class="workout">
                    <p>${workout.date.substring(0,10)}</p>
                    <h4>${workout.name}</h4>
                    <p>Type: ${workout.type}</p>
                    <p>Exercise(s) performed:<br>
                    ${workout.exercises}</p>
                </div>

                <div class="update-workout-form-container" id="form-${workout._id}">
                <form class="update-workout-form">
                    <label>Date:
                    <input name="workout[date]" type="date" value="${workout.date.substring(0,10)}"></label><br><br>

                    <label>Workout Name:
                    <input name="workout[name]" type="text" value="${workout.name}"></label><br><br>

                    
                    <input name="workout[id]" type="hidden" value="${workout._id}">

                    <label>Type:
                    <select name="workout[type]" name="update-workout-type" type="text">
                    <option value="strength">Strength</option>
                    <option value="cardio">Cardio</option>
                    <option value="yoga">Yoga</option>
                    <option value="other">Other</option>
                    </select></label><br><br>
                    <div id="update-workout-exercise-input">
                    <label>Exercises Performed<br>(e.g. "Bench Press, Deadlift, Squat")<br><br>
                    <input name="workout[exercises]" class="workout-exercise-field" type="text" value="${workout.exercises}"></label>
                    </div><br>
                    <button type="submit">Save</button>
                </form></div>
            
                <button id="edit-button-${workout._id}" class="edit-workout-button" data-id=${workout._id}>Edit</button><br>
                <button class="delete-workout-button" data-id=${workout._id}>Delete</button><br><br>
            </div>
        `
    })
    $('#my-workouts-display').html(workoutsHtml)
    $('.update-workout-form-container').hide()
}

const onViewWorkoutsFailure = function () {
    $('#my-workouts-display').html('<p class="failure">Error displaying workouts.</p>')
}

const onUpdateWorkoutSuccess = function (workoutId) {
    $('#workout-' + workoutId).prepend(`
        <p class="workout-display-text success"><i>Workout updated!</i></p><br>
    `)
    $('.workout-display-text').fadeOut(10000)
    $('form').trigger('reset')
}

const onUpdateWorkoutFailure = function (workoutId) {
    $('#form-' + workoutId).prepend('<p class="workout-display-text failure">Error updating workout.</p>')
}

const onDeleteWorkoutSuccess = function () {
    $('#my-workouts-display').prepend(`
        <h5 class="workout-display-text success">Workout deleted!</h5><br>
    `)
    $('.workout-display-text').fadeOut(10000)
}

const onDeleteWorkoutFailure = function () {
    $('#my-workouts-display').prepend('<p class="workout-display-text failure"><i>Error deleting workout.</i></p>')
    $('.workout-display-text').fadeOut(10000)
}

module.exports = {
    onAddWorkoutSuccess,
    onAddWorkoutFailure,
    onViewWorkoutsSuccess,
    onViewWorkoutsFailure,
    onUpdateWorkoutSuccess,
    onUpdateWorkoutFailure,
    onDeleteWorkoutSuccess,
    onDeleteWorkoutFailure
}
