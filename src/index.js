import { createProject } from "./projects/createProject";
import { renderProjects } from "./projects/renderProject"
import { expand } from "./expand"
import { createTodo } from "./todoList/createTodo";
import { getProjectID } from "./getIDs";
import './style.css'

let projectSub = document.querySelector('#submitProject');
let sub = document.querySelector('#submit')

window.addEventListener('load', () => {
    renderProjects();
    expand();
    getProjectID();
})

projectSub.addEventListener('click', (e) => {
    e.preventDefault();
    createProject();
    renderProjects();
    expand();
    getProjectID();
});

sub.addEventListener('click', (e) => {
    e.preventDefault();
    createTodo();
})
