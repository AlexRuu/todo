import { createProject } from "./projects/createProject";
import { renderProjects, retrieveProjects } from "./projects/renderProject"
import { expandProject, expandTodo } from "./expand"
import { createTodo, todoList } from "./todoList/createTodo";
import { getProjectID } from "./todoList/taskAdd";
import { deleteProject, deleteTask } from "./deleteStuff";
import { editTask } from "./todoList/edit";
import './style.css'

let projectSub = document.querySelector('#submitProject');
let sub = document.querySelector('#submitTask')

window.addEventListener('load', () => {
    retrieveProjects();
    renderProjects();
    deleteTask();
    expandProject();
    getProjectID();
    expandTodo();
    deleteProject();
})

projectSub.addEventListener('click', (e) => {
    e.preventDefault();
    createProject();
    renderProjects();
    deleteProject();
    deleteTask();
    expandProject();
    getProjectID();
    expandTodo();
    newProject.style.display = 'none';
});

sub.addEventListener('click', (e) => {
    e.preventDefault();
    createTodo();
    renderProjects();
    deleteProject();
    deleteTask();
    expandProject();
    getProjectID();
    expandTodo();
    newTask.style.display = 'none';
})

// Forms 
let newProject = document.querySelector('.createProject');
let addProject = document.querySelector('#createNew');
let closeProject = document.querySelector('#closeProject')
let newTask = document.querySelector('.addToList');
let closeTask = document.querySelector('#closeTask');
let editForm = document.querySelector('.editTask');
let closeEdit = document.querySelector('#closeEdit');

addProject.onclick = () => {
    newProject.style.display = 'block';
};

closeProject.onclick = () => {
    newProject.style.display = 'none';
};

document.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'addTask') {
        newTask.style.display = 'block';
    }
})

closeTask.onclick = () => {
    newTask.style.display = 'none';
}

closeEdit.onclick = () => {
    editForm.style.display = 'none';
}

window.onclick = (e) => {
    if (e.target === newProject) {
        newProject.style.display = 'none';
    };
    if (e.target === newTask) {
        newTask.style.display = 'none';
    };
    if (e.target === editForm) {
        editForm.style.display = 'none';
    }
};

editTask();