import { listProjects } from "./createProject";

function buildProject(project) {
    const projectDisplay = document.querySelector('.projectDisplay');
    let projectDivs = document.createElement('div');
    let task = document.createElement('div');
    let expand = document.createElement('div');
    let checkbox = document.createElement('input');
    let title = document.createElement('label');
    let add = document.createElement('button');
    let remove = document.createElement('button');

    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('checkbox');
    
    projectDivs.classList.add('projectDiv');
    projectDivs.setAttribute('id', listProjects.indexOf(project));

    title.classList.add('pTitle')
    title.setAttribute('for', listProjects.indexOf(project));
    title.innerText = project.title

    task.classList.add('task');
    task.setAttribute('id', `task${listProjects.indexOf(project)}`)

    add.classList.add('addTask');
    add.setAttribute('id', 'addTask')
    add.innerHTML = 'Add Task'

    remove.classList.add('removeProject')
    remove.setAttribute('id', 'removeProject')
    remove.innerHTML = 'Remove Project'

    expand.classList.add('expandContent');
    expand.append(task, add, remove)

    projectDivs.append(checkbox, title, expand)
    projectDisplay.appendChild(projectDivs);
};

export {
    buildProject
}
