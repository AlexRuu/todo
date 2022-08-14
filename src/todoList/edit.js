import { renderProjects } from "../projects/renderProject";
import { expandProject, expandTodo } from "../expand"
import { localTask, todoList } from "./createTodo";
import { getProjectID } from "./taskAdd";
import { deleteProject, deleteTask } from "../deleteStuff";

let edit = document.querySelector('.editTask');
let editForm = document.forms['editTodo'];
let subB = document.querySelector('#submitEdit')

function editTask() {
    document.addEventListener('click', function (e) {
        if (e.target && e.target.id === 'editTaskButton') {
            edit.style.display = 'block';
            let task = e.target.parentElement.parentElement.id;
            let taskID = task.charAt(task.length - 1);
            editForm['eTitle'].value = todoList[taskID].title;
            editForm['eDate'].value = todoList[taskID].dueDate;
            editForm['ePriority'].value = todoList[taskID].priority;
            editForm['eDescription'].value = todoList[taskID].description;
            console.log(todoList)
            subB.addEventListener('click', function (e) {
                if (e.target && e.target.id === 'submitEdit') {
                    e.preventDefault();
                    todoList[taskID].title = editForm['eTitle'].value;
                    todoList[taskID].dueDate = editForm['eDate'].value;
                    todoList[taskID].priority = editForm['ePriority'].value;
                    todoList[taskID].description = editForm['eDescription'].value;
                    localTask();
                    renderProjects();
                    deleteProject();
                    deleteTask();
                    expandProject();
                    getProjectID();
                    expandTodo();
                    edit.style.display = 'none';
                }
            })
        }
    })
}

export {
    editTask
}