import { todoList } from "./createTodo";

let newTask = document.querySelector('.addToList');
let taskForm = document.forms['addTodo'];

function editTask() {
    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'removeTask') {
            newTask.style.display = 'block';
            let task = e.target.parentElement.parentElement.id;
            let taskID = task.charAt(task.length - 1);
            taskForm['title'].value = todoList[taskID].title;
            taskForm['date'].value = todoList[taskID].dueDate;
            taskForm['priority'].value = todoList[taskID].priority;
            taskForm['description'].value = todoList[taskID].description;
        }
    })
}

export {
    editTask
}