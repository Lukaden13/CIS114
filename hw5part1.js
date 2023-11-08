function submitForm() {
    var fullName = document.getElementById('fullName').value;
    var ageGroup = document.querySelector('input[name="ageGroup"]:checked');
    var browsersChecked = document.querySelectorAll('input[name="browser"]:checked').length > 0;
    var moviePreference = document.getElementById('moviePreference').value;
    var output = document.getElementById('output');

    if (!fullName || !ageGroup || !browsersChecked || !moviePreference) {
        output.textContent = "Please fill out all fields.";
        return;
    }

    output.textContent = "Thanks, your data was submitted!";
}
