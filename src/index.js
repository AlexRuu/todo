import { createProject } from "./projects/createProject";
import { renderProjects } from "./projects/renderProject"
import { expand } from "./expand"
import './style.css'

let projectSub = document.querySelector('#submitProject');

window.addEventListener('load', () => {
    renderProjects();
    expand();
}) 

projectSub.addEventListener('click', (e) => {
    e.preventDefault();
    createProject();
    renderProjects();
    expand();
});

