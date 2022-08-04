import { listProjects } from "./createProject";
import { buildProject } from "./buildProject";

function renderProjects() {
    const projectDisplay = document.querySelector('.projectDisplay');
    const projects = document.querySelectorAll('.projectDiv');
    projects.forEach(project => projectDisplay.removeChild(project));
    for (let i = 0; i < listProjects.length; i++) {
        buildProject(listProjects[i]);
    };
};

export {
    renderProjects
}