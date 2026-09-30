function authenticate() {

    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Demo password
    const correctPassword = "12345";

    if (password === correctPassword) {
        message.textContent = "Login successful!";
        message.style.color = "green";
    } else {
        message.textContent = "Incorrect password!";
        message.style.color = "red";
    }
}