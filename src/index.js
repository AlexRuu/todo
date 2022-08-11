import { createProject } from "./projects/createProject";
import { renderProjects, retrieveProjects } from "./projects/renderProject"
import { expandProject, expandTodo } from "./expand"
import { createTodo } from "./todoList/createTodo";
import { getProjectID } from "./taskAdd";
import { deleteProject, deleteTask } from "./deleteStuff";

import './style.css'

let projectSub = document.querySelector('#submitProject');
let sub = document.querySelector('#submit')

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
})