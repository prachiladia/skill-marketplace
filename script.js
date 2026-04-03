function searchSkill() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
        let text = cards[i].innerText.toLowerCase();
        cards[i].style.display = text.includes(input) ? "block" : "none";
    }
}

/* Auto-fill contact name */
window.onload = function () {
    let params = new URLSearchParams(window.location.search);
    let user = params.get("user");

    if (user) {
        document.getElementById("user").value = user;
    }
};
/* Signup */
function signup(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = { name, email, password };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful!");
    window.location.href = "login.html";
}

/* Login */
function login(event) {
    event.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && email === storedUser.email && password === storedUser.password) {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid credentials!");
    }
}window.onload = function () {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        let nav = document.querySelector("nav div");
        nav.innerHTML += `<span style="margin-left:15px;">👤 ${user.name}</span>`;
    }
};