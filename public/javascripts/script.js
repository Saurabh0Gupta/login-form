document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Yahan aap login logic add kar sakte hain, jaise ki username and password validation, server request, etc.
    // Example: 
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (email === email && password === password) {
        // Successful login, redirect or perform necessary actions here.
        alert("Login successful!");
    } else {
        alert("Invalid email/username or password. Please try again.");
    }
});
