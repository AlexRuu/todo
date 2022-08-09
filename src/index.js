import { createProject } from "./projects/createProject";
import { renderProjects } from "./projects/renderProject"
import { expandProject } from "./expand"
import { createTodo } from "./todoList/createTodo";
import { getProjectID } from "./taskAdd";

import './style.css'

let projectSub = document.querySelector('#submitProject');
let sub = document.querySelector('#submit')

window.addEventListener('load', () => {
    renderProjects();
    expandProject();
    getProjectID();
})

projectSub.addEventListener('click', (e) => {
    e.preventDefault();
    createProject();
    renderProjects();
    expandProject();
    getProjectID();
});

sub.addEventListener('click', (e) => {
    e.preventDefault();
    createTodo();
    renderProjects();
    expandProject();
    getProjectID();
})
