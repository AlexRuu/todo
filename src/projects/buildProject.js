import { listProjects } from "./createProject";

function buildProject(project) {
    const projectDisplay = document.querySelector('.projectDisplay');
    let projectDivs = document.createElement('div');
    let clickable = document.createElement('div');
    let expand = document.createElement('div');
    let checkbox = document.createElement('input');
    let title = document.createElement('label');
    let add = document.createElement('button');
    let remove = document.createElement('button');

    checkbox.setAttribute('type', 'checkbox');

    title.classList.add('pTitle')
    title.setAttribute('for', listProjects.indexOf(project));
    title.innerText = project.title

    projectDivs.classList.add('projectDiv');
    projectDivs.setAttribute('id', listProjects.indexOf(project));

    clickable.classList.add('clickToExpand');
    clickable.append(checkbox, title);

    add.classList.add('addTodo');
    add.setAttribute('id', 'addTodo')
    add.innerHTML = 'Add Task'

    remove.classList.add('removeProject')
    remove.setAttribute('id', 'removeProject')
    remove.innerHTML = 'Remove Project'

    expand.classList.add('expandContent');
    expand.append(add, remove)

    projectDivs.append(clickable, expand)
    projectDisplay.appendChild(projectDivs);
};

export {
    buildProject
}
