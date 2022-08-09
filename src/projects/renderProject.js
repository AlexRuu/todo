import { listProjects } from "./createProject";
import { buildProject } from "./buildProject";
import { todoList } from "../todoList/createTodo";
import { buildTodo } from "../todoList/buildTodo";

function renderProjects() {
    const projectDisplay = document.querySelector('.projectDisplay');
    const projects = document.querySelectorAll('.projectDiv');
    const projectID = document.getElementsByClassName('projectDiv')
    projects.forEach(project => projectDisplay.removeChild(project));
    for (let i = 0; i < listProjects.length; i++) {
        buildProject(listProjects[i]);
        for (let j = 0; j < todoList.length; j++) {
            if (todoList[j].project === projectID[i].id) {
                buildTodo(todoList[j], i)
            }
            else {
                continue;
            }
        }
    };
};

export {
    renderProjects
}