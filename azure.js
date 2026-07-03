function showMessage() {
    alert("Welcome to my website!");
}

function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
}

function changeText() {
    document.getElementById("heading").innerHTML = "JavaScript is Working!";
}

function displayDate() {
    document.getElementById("date").innerHTML = new Date();
}

function resetPage() {
    document.body.style.backgroundColor = "white";
    document.getElementById("heading").innerHTML = "Welcome";
    document.getElementById("date").innerHTML = "";
}