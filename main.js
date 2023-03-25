function removeForm() {
    document.getElementById("create-form").style.display = "none";
    document.getElementById("create-button").style.display = "block";
}

function displayForm() {
    document.getElementById("create-form").style.display = "block";
    document.getElementById("create-button").style.display = "none";
}


document.getElementById("create-form")
    .addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("create-form").style.display = "none";
    document.getElementById("create-button").style.display = "block";
    });

