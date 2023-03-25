function removeForm() {
    document.getElementById("create-form").style.display = "none";
    document.getElementById("create-button").style.display = "block";
}

function displayForm() {
    document.getElementById("create-form").style.display = "flex";
    document.getElementById("create-button").style.display = "none";
}


document.getElementById("create-form")
    .addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("create-form").style.display = "none";
    document.getElementById("create-button").style.display = "block";
    });

function createTask() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    const task = document.createElement("div");
    const taskTitle = document.createElement("h3");
    const taskDescription = document.createElement("p");
    const taskDate = document.createElement("p");

    taskTitle.innerText = title;
    taskDescription.innerText = description;
    taskDate.innerText = new Date().toLocaleString();

    task.appendChild(taskTitle);
    task.appendChild(taskDescription);
    task.appendChild(taskDate);
    document.getElementById("tasks-container").appendChild(task);
    
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
}

function cancelTask() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";

    removeForm();
}