let tasks = [];

function addTask() {
    let input = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    let text = input.value.trim();

    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        text: text,
        completed: false
    });

    input.value = "";
    displayTasks();
}

function displayTasks() {
    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        let span = document.createElement("span");
        span.textContent = task.text;

        if (task.completed) {
            span.style.textDecoration = "line-through";
        }

        let done = document.createElement("button");
        done.textContent = task.completed ? "Undo" : "Done";

        done.onclick = function() {
            tasks[index].completed = !tasks[index].completed;
            displayTasks();
        };

        let del = document.createElement("button");
        del.textContent = "Delete";

        del.onclick = function() {
            tasks.splice(index, 1);
            displayTasks();
        };

        li.appendChild(span);
        li.appendChild(done);
        li.appendChild(del);

        taskList.appendChild(li);
    });

    updateStats();
}

function updateStats() {
    let total = tasks.length;

    let completed = tasks.filter(
        task => task.completed
    ).length;

    let pending = total - completed;

    document.getElementById("total").textContent =
        "Total: " + total;

    document.getElementById("completed").textContent =
        "Completed: " + completed;

    document.getElementById("pending").textContent =
        "Pending: " + pending;
}

displayTasks();