import { todoList } from "./createTodo";

function buildTodo(todo, number) {
    const taskContainer = document.querySelector(`#task${number}`);
    let task = document.createElement('div');
    let checkbox = document.createElement('input');
    let title = document.createElement('label');
    let taskInfo = document.createElement('div');
    let dueDate = document.createElement('div');
    let description = document.createElement('div');
    let edit = document.createElement('button');
    let remove = document.createElement('button');

    task.classList.add('taskDetail');
    task.setAttribute('id', `taskList${todoList.indexOf(todo)}`);

    checkbox.setAttribute('type', 'checkbox');
    
    title.classList.add('taskTitle');
    title.innerText = todo.title
    title.setAttribute('for', `taskList${todoList.indexOf(todo)}`);

    taskInfo.classList.add('expandTask');

    dueDate.classList.add('taskDue');
    dueDate.innerText = todo.dueDate;

    description.classList.add('taskDescription');
    description.innerText = todo.description;

    edit.classList.add('editTask');
    edit.innerHTML = 'Edit';

    remove.classList.add('removeTask');
    remove.innerHTML = 'Delete'

    taskInfo.append(dueDate, description, edit, remove)

    task.append(checkbox, title, taskInfo);
    taskContainer.appendChild(task);
};

export {
    buildTodo
}