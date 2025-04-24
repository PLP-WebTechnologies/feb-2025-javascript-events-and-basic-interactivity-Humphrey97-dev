// Event Handling: Button Click
document.getElementById("clickButton").addEventListener("click", function() {
    alert("Button clicked!");
});

// Event Handling: Hover
document.getElementById("hoverButton").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#f44336";
});
document.getElementById("hoverButton").addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
});

// Event Handling: Keypress Detection
document.getElementById("keyPressInput").addEventListener("keyup", function() {
    console.log("User typed: " + this.value);
});

// Bonus: Double-click to reveal secret action
document.getElementById("clickButton").addEventListener("dblclick", function() {
    alert("You found the secret!");
});

// Interactive Element: Change Text Button
document.getElementById("changeTextButton").addEventListener("click", function() {
    this.textContent = "You clicked me!";
    this.style.backgroundColor = "#008CBA";
});

// Form Validation: Real-time feedback
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting for validation

    let feedback = "";

    if (username.value.trim() === "") {
        feedback += "Username is required.<br>";
    }

    if (!email.value.includes("@")) {
        feedback += "Please enter a valid email.<br>";
    }

    if (password.value.length < 8) {
        feedback += "Password must be at least 8 characters long.<br>";
    }

    if (feedback) {
        document.getElementById("formFeedback").innerHTML = feedback;
    } else {
        document.getElementById("formFeedback").innerHTML = "Form submitted successfully!";
    }
});

// Optional: Real-time password feedback
password.addEventListener("input", function() {
    if (this.value.length < 8) {
        this.style.borderColor = "red";
    } else {
        this.style.borderColor = "green";
    }
});
