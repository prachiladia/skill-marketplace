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