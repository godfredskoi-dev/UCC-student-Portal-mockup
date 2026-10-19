const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop the form from submitting instantly

    // Get the values the user typed in
    const regNum = document.getElementById('RegNum').value.trim();
    const password = document.getElementById('pWord').value.trim();

    // Set your expected/stored credentials (you can change these to test)
    const storedRegNum = 'AG/AGR/25/0136';
    const storedPassword = '041933';

    // Compare what was typed with the stored values
    if (regNum === storedRegNum && password === storedPassword) {
        // Correct! Redirect to your GPA results page
        setTimeout(function(){
             window.location.href = 'results.html';
        }, 1500);
       
    } else {
        // Incorrect credentials
        Alert('Invalid Registration Number or Password. Please try again.');
    }
});





