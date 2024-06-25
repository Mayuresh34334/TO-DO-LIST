const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText === "") return ;

    const task = {text: taskText};
    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";

    displayTasks();
}


function deleteTask(index){
    tasks.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
}


function editTask(index){
    const newTask = prompt("Edit the task",tasks[index].text);

    if(newTask !== null){
        tasks[index].text == newTask;

        localStorage.setItem("tasks", JSON.stringify(tasks));

        displayTasks();
    }
}

function displayTasks(){
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${task.text}</span>
                         <hr>
                        <button class="edit-button" onclick="editTask(${index})"> <i class="fa-solid fa-pen-to-square"></i> </button>
                        <button class="delete-button" onclick="deleteTask(${index})"> <i class="fa-solid fa-trash"></i> </button>`;
        
        taskList.appendChild(li);
    })
}

displayTasks();