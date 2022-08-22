import { parentID } from "./taskAdd"
let todoList = [];

class todo {
    constructor(title, dueDate, priority, description, project, complete) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.description = description;
        this.project = project;
        this.complete = complete
    }
}

let defaultTask = new todo('Sample Title', '2022-03-23', 'High', 'Description goes here', '0')
todoList.push(defaultTask)

function dateIsValid(dateStr) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    if (dateStr.match(regex) === null) {
        return false;
    }

    const date = new Date(dateStr);

    const timestamp = date.getTime();

    if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
        return false;
    }

    return date.toISOString().startsWith(dateStr);
}

function createTodo() {
    let newTodo;
    let todoForm = document.querySelector('.addTodo')
    let tTitle = document.querySelector('#title').value;
    let tDescription = document.querySelector('#description').value;
    let tDate = document.querySelector('#date').value;
    let tPriority = document.querySelector('#priority').value;
    let tProject = parentID;
    let tComplete = 'incomplete'

    newTodo = new todo(tTitle, tDate, tPriority, tDescription, tProject, tComplete);

    if (dateIsValid(tDate) === true && tTitle != '') {
        todoList.push(newTodo);
        localTask();
        todoForm.reset();
    }
    else {
        alert('Please enter a valid date/title')
    };
}
function localTask() {
    localStorage.setItem(`todoList`, JSON.stringify(todoList));
}

export {
    createTodo,
    todoList,
    localTask,
    dateIsValid
}