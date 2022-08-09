import { parentID } from "../taskAdd"
let todoList = [];

class todo {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project
    }
}

let defaultTask = new todo ('Sample Title', 'Description goes here', '2022/03/23', 'High', '0')
todoList.push(defaultTask)

function createTodo() {
    let newTodo;
    let todoForm = document.querySelector('.addTodo')
    let tTitle = document.querySelector('#title').value;
    let tDescription = document.querySelector('#description').value;
    let tDate = document.querySelector('#date').value;
    let tPriority = document.querySelector('#priority').value;
    let tProject = parentID;

    newTodo = new todo(tTitle, tDescription, tDate, tPriority, tProject);
    todoList.push(newTodo);
    todoForm.reset();
    console.log(todoList);
}

export {
    createTodo,
    todoList
}