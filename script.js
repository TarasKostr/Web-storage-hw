const taskInput = document.querySelector('#taskInput')
const taskList = document.querySelector('#taskList')

let tasks = JSON.parse(localStorage.getItem('tasks')) || []

function addTask() {
    const inputValue = taskInput.value;
    if (inputValue === "") {
        alert("Input the task")
    }

    tasks.push({task: inputValue, completed: false})
    localStorage.setItem('tasks', JSON.stringify(tasks))
    displayTasks()
    taskInput.value = ''
}

function displayTasks() {
    taskList.innerHTML = ''
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<input type="checkbox" onchange="updateTask(${index}, this.checked)" ${task.completed ? "checked" : ""}> ${task.task}`
        taskList.appendChild(listItem)
    });
}

function updateTask(index, completed) {
    tasks[index].completed = completed
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
displayTasks()