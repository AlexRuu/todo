import { todoList } from "./todoList/createTodo";
import { listProjects } from "./projects/createProject";
import { renderProjects } from "./projects/renderProject";
import { expandProject, expandTodo } from "./expand"
import { localTask } from "./todoList/createTodo";
import { localProject } from "./projects/createProject";

function deleteProject() {
    let removeP = document.querySelectorAll('.removeProject');
    removeP.forEach((button) => {
        button.addEventListener('click', function () {
            let grandparent = this.parentElement.parentElement.id;
            listProjects.splice(grandparent, 1);
            localProject();
            for (let i = 0; i < todoList.length; i++) {
                if (todoList[i].project === grandparent) {
                    todoList.splice(i, 1);
                    localTask();
                };
            };
            renderProjects();
            deleteProject();
            deleteTask();
            expandProject();
            getProjectID();
            expandTodo();
        });
    });
};

function deleteTask() {
    let removeTask = document.querySelectorAll('.removeTask');
    removeTask.forEach((button) => {
        button.addEventListener('click', function () {
            let task = this.parentElement.parentElement.id;
            let taskID = task.charAt(task.length - 1);
            todoList.splice(taskID, 1);
            localTask();
            rrenderProjects();
            deleteProject();
            deleteTask();
            expandProject();
            getProjectID();
            expandTodo();
        })
    })
}

export {
    deleteProject,
    deleteTask
}