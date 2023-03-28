function removeForm() {
    document.getElementById("create-form").style.visibility = "hidden";
    document.getElementById("create-button").style.visibility = "visible";
}

function displayForm() {
    document.getElementById("create-form").style.visibility = "visible";
    document.getElementById("create-button").style.visibility = "hidden";
}

function removeEditForm() {
    document.getElementById("edit-form").style.visibility = "hidden";
    document.getElementById("create-button").style.visibility = "visible";
}

function displayEditForm() {
    document.getElementById("create-form").style.visibility = "visible";
    document.getElementById("create-button").style.visibility = "hidden";
}

document.getElementById("create-form")
    .addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("create-form").style.visibility = "hidden";
    document.getElementById("create-button").style.visibility = "visible";
    });
    
document.getElementById("edit-form")
    .addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("edit-form").style.visibility = "hidden";
    document.getElementById("create-button").style.visibility = "visible";
    });

function createTask() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    const task = document.createElement("div");
    const buttonContainer = document.createElement("div");
    const taskTitle = document.createElement("h3");
    const taskDescription = document.createElement("p");
    const editButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    const taskDate = document.createElement("p");

    taskTitle.innerText = title;
    taskDescription.innerText = description;
    editButton.innerText = "edit";
    deleteButton.innerText = "delete";
    taskDate.innerText = new Date().toLocaleString();

    task.appendChild(taskTitle);
    task.appendChild(taskDescription);
    task.appendChild(buttonContainer);
    task.appendChild(taskDate);
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);
    document.getElementById("tasks-container").appendChild(task);

    editButton.addEventListener("click", function () {
        const taskContainer = this.parentNode.parentNode;
        const taskTitle = taskContainer.querySelector("h3").innerText;
        const taskDescription = taskContainer.querySelector("p").innerText;

        document.getElementById("editTitle").value = taskTitle;
        document.getElementById("editDescription").value = taskDescription;
        
        document.getElementById("edit-form").style.display = "block";
        document.getElementById("create-button").style.visibility = "hidden";
    });
    
    deleteButton.addEventListener("click", function () {
        const taskContainer = this.parentNode.parentNode;
        taskContainer.parentNode.removeChild(taskContainer);
    });
    
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
}

function taskEdit() {
    const title = document.getElementById("editTitle").value;
    const description = document.getElementById("editDescription").value;

    const taskElement = document.querySelector(".selected-task");
    const taskId = taskElement.getAttribute("data-task-id");
    const taskTitleElement = taskElement.querySelector("h3");
    const taskDescriptionElement = taskElement.querySelector("p");
    
    taskTitleElement.innerText = title;
    taskDescriptionElement.innerText = description;
    
    taskElement.classList.remove("selected-task");
    document.getElementById("edit-form").style.display = "none";
    document.getElementById("create-button").style.visibility = "visible";
}

function cancelTaskEdit() {
    document.getElementById("editTitle").value = "";
    document.getElementById("editDescription").value = "";

    removeEditForm();
}

function cancelTask() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";

    removeForm();
}