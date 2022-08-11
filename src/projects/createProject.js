let listProjects = [];
let defaultProject;
class project {
    constructor(title) {
        this.title = title;
    };
};
defaultProject = new project("Default")
listProjects.push(defaultProject)

function createProject() {
    let newProject; 

    let projectTitle = document.querySelector('#projectTitle').value;

    newProject = new project(projectTitle);
    listProjects.push(newProject);
    document.forms[0].reset();
    localProject();
}

function localProject() {
    localStorage.setItem(`listProjects`, JSON.stringify(listProjects));
}

export {
    createProject,
    listProjects,
}