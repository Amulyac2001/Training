document.addEventListener("DOMContentLoaded", loadTasks);

function add() {
    let taskInput=document.getElementById("taskInput");
    let taskText=taskInput.value.trim();
    if (taskText==="") return;
    
    let taskList=document.getElementById("taskList");
    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button class='delete' onclick='deleteTask(this)'>X</button>`;
    taskList.appendChild(li);
    
    saveTasks();
    taskInput.value = "";
}

function deleteTask(btn) {
    btn.parentElement.remove();
    saveTasks();
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push(li.firstChild.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `${task} <button class='delete' onclick='deleteTask(this)'>X</button>`;
        taskList.appendChild(li);
    });
}