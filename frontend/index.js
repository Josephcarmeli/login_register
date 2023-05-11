// index.js
let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let fullnameInput = document.getElementById("fullname");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let submitBtn = document.getElementById("submit");

signinBtn.onclick = function() {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
};

signupBtn.onclick = function() {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Register";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
};

submitBtn.onclick = function(e) {
    e.preventDefault();
    let fullname = fullnameInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;

    if (title.innerHTML === "Register") {
        fetch('http://localhost:3001/api/register', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullname: fullname,
                email: email,
                password: password,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.fullname) { 
                window.location.href = './home.html'; 
            } else {
                console.error('Registration failed:', data.error);
            }
        })
        .catch((error) => console.error('Error:', error));
    } else if (title.innerHTML === "Sign In") {
        fetch('http://localhost:3001/api/login', {  
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Login successful') {
                window.location.href = './home.html';  
            } else {
                console.error('Login failed:', data.error);
            }
        })
        .catch((error) => console.error('Error:', error));
    }
}
