import { loadHeaderTo } from "./HEADER.js";

async function login(email, password) {
    // create user table
    const result = await fetch("/api/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    const data = await result.json();
    await loginStatus(data);
}

async function loginStatus(data) {
    console.log(data);
    switch (data.status) {
        case 200:
            console.log(data);
            localStorage.setItem("user_id", data.data.id);
            window.location.href = "/store";
            break;
        case 400:
            console.error(data.error);
            alert(data.error);
            break;
        case 500:
            console.error(data.error);
            alert(data.error);
            break;
        default:
            console.error("Unknown error");
            break;
    }
}

function addLoginButtonListener() {
    const loginButton = document.getElementById("login-button");
    loginButton.addEventListener("click", async (e) => {
        e.preventDefault();
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const email = emailInput.value;
        const password = passwordInput.value;

        const fields = [
            { value: email, element: emailInput },
            { value: password, element: passwordInput }
        ];

        let firstEmptyField = null;
        fields.forEach((field) => {
            if (!field.value) {
                alert("This field is required");
                if (!firstEmptyField) firstEmptyField = field.element;
            }
        });

        // Validation
        if (!email) {
            alert("Email is required");
            if (!firstEmptyField) firstEmptyField = emailInput;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Invalid email format");
            if (!firstEmptyField) firstEmptyField = emailInput;
        }

        if (!password) {
            alert("Password is required");
            if (!firstEmptyField) firstEmptyField = passwordInput;
        }

        if (firstEmptyField) {
            firstEmptyField.focus();
            return;
        }
    
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        await login(email, password);
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadHeaderTo();
    addLoginButtonListener();
});