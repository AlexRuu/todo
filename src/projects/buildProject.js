import { listProjects } from "./createProject";

function buildProject(project) {
    const projectDisplay = document.querySelector('.projectDisplay');
    let projectDivs = document.createElement('div');
    let task = document.createElement('div');
    let expand = document.createElement('div');
    let checkbox = document.createElement('input');
    let title = document.createElement('span');
    let add = document.createElement('button');
    let remove = document.createElement('button');

    projectDivs.classList.add('projectDiv');
    projectDivs.setAttribute('id', listProjects.indexOf(project));

    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('checkbox');
    checkbox.className += ' projects';

    title.classList.add('pTitle')
    title.innerText = project.title

    if (project.complete === 'complete') {
        title.style.textDecoration = 'line-through';
        checkbox.checked = true;
    }

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
