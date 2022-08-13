import { parentID } from "./taskAdd"
let todoList = [];

class todo {
    constructor(title, dueDate, priority, description, project) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.description = description;
        this.project = project
    }
}

let defaultTask = new todo('Sample Title', '2022-03-23', 'High', 'Description goes here', '0')
todoList.push(defaultTask)

function createTodo() {
    let newTodo;
    let todoForm = document.querySelector('.addTodo')
    let tTitle = document.querySelector('#title').value;
    let tDescription = document.querySelector('#description').value;
    let tDate = document.querySelector('#date').value;
    let tPriority = document.querySelector('#priority').value;
    let tProject = parentID;

    newTodo = new todo(tTitle, tDate, tPriority, tDescription, tProject);
    todoList.push(newTodo);
    localTask();
    todoForm.reset();
}

function localTask() {
    localStorage.setItem(`todoList`, JSON.stringify(todoList));
}

export {
    createTodo,
    todoList,
    localTask
}