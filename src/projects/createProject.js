let listProjects = [];
let defaultProject;
class project {
    constructor(title, complete) {
        this.title = title;
        this.complete = complete
    };
};
defaultProject = new project("Default", "incomplete")
listProjects.push(defaultProject)

function createProject() {
    let newProject;
    let projectTitle = document.querySelector('#projectTitle').value;
    let complete = 'incomplete'

    newProject = new project(projectTitle, complete);
    listProjects.push(newProject);
    document.forms[0].reset();
    localProject();
    console.log(listProjects)
}

function localProject() {
    localStorage.setItem(`listProjects`, JSON.stringify(listProjects));
}

export {
    createProject,
    listProjects,
    localProject
}