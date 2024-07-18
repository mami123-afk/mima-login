document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simulate login process (replace with actual login logic)
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Example validation (replace with your own validation logic)
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Redirect to dashboard or desired page
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password. Please try again.');
        // Clear the password field
        document.getElementById('password').value = '';
        // Focus back on the password field
        document.getElementById('password').focus();
    }
});

document.getElementById('forgot-password').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirect to forgot password page');
    // Replace with actual link to forgot password page or modal
});

document.getElementById('create-account').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirect to create account page');
    // Replace with actual link to registration page
});
