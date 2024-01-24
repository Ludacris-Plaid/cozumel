function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation (you should use a more secure method in a real application)
    if (username === 'guide' && password === 'cozumel2024') {
        alert('Login successful!');
        // Redirect to the landing page (replace 'landing.html' with your actual landing page)
        window.location.href = 'landing.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
