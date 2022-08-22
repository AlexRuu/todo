import { todoList, localTask } from "./todoList/createTodo";
import { listProjects, localProject } from "./projects/createProject";

function completed() {
    let checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            let selected = checkbox.parentElement;
            if (checkbox.checked === true) {
                if (selected.className === 'projectDiv') {
                    selected.style.textDecoration = 'line-through';
                    let innerChecks = selected.getElementsByClassName("checkbox tasks");
                    let parentCheck = selected.id;
                    for (let i = 0; i < innerChecks.length; i++) {
                        innerChecks[i].checked = true;
                    }
                    listProjects[parentCheck].complete = 'complete'
                    for (let j = 0; j < todoList.length; j++) {
                        if (todoList[j].project === parentCheck) {
                            todoList[j].complete = 'complete'
                        }
                    }
                }
                else if (checkbox.parentElement.className === 'taskDetail') {
                    selected.style.textDecoration = 'line-through';
                    let parentBox = checkbox.parentElement.parentElement.parentElement.parentElement;
                    let task = selected.id;
                    let taskID = task.charAt(task.length - 1);
                    todoList[taskID].complete = 'complete';
                    let amount = Object.values(todoList).filter(project => project.project === parentBox.id).length
                    let counter = 0;
                    for (let i = 0; i < todoList.length; i++) {
                        if (todoList[i].project === parentBox.id && todoList[i].complete === 'complete') {
                            counter++;
                        }
                    }
                    if (amount === counter) {
                        parentBox.querySelector('input').checked = true;
                        parentBox.style.textDecoration = 'line-through';
                        listProjects[parentBox.id].complete = 'complete'
                    }
                }
            }
            else if (checkbox.checked === false) {
                if (selected.className === 'projectDiv') {
                    selected.style.textDecoration = 'none';
                    listProjects[selected.id].complete = 'incomplete';
                    let innerCheckbox = selected.getElementsByClassName('checkbox tasks')
                    for (let i = 0; i < todoList.length; i++) {
                        if (todoList[i].project === selected.id) {
                            todoList[i].complete = 'incomplete';
                        }
                    }
                    for (let j = 0; j < innerCheckbox.length; j++) {
                        innerCheckbox[j].checked = false
                        innerCheckbox[j].style.textDecoration = 'none';
                    }
                }
                else if (selected.className === 'taskDetail') {
                    selected.style.textDecoration = 'none';
                    let parentBox = checkbox.parentElement.parentElement.parentElement.parentElement;
                    let task = selected.id;
                    let taskID = task.charAt(task.length - 1);
                    let numberOfCompleted = Object.values(todoList).filter(task => task.project === parentBox.id && task.complete === 'complete').length;
                    let numberOfTasks = Object.values(todoList).filter(task => task.project == parentBox.id).length;
                    if (listProjects[parentBox.id].complete === 'complete' && numberOfCompleted === numberOfTasks) {
                        listProjects[parentBox.id].complete = 'incomplete';
                        todoList[taskID].complete = 'incomplete';
                        parentBox.style.textDecoration = 'none';
                        parentBox.querySelector('input').checked = false;
                    }
                    else {
                        todoList[taskID].complete = 'incomplete';
                    }
                }
            }
            localProject();
            localTask();
        })
    })
}

export {
    completed
}