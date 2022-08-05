let todoList = [];

class todo {
    constructor (title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

function createTodo () {
    let newTodo;
    let todoForm = document.querySelector('.addTodo')
    let tTitle = document.querySelector('#title').value;
    let tDescription = document.querySelector('#description').value;
    let tDate = document.querySelector('#date').value;
    let tPriority = document.querySelector('#priority').value;

    newTodo = new todo(tTitle, tDescription, tDate, tPriority);
    todoList.push(newTodo);
    todoForm.reset();
    console.log(todoList);
}

export {
    createTodo,
    todoList
}