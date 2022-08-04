let todoList = [];

function createTodo () {
    class todo {
        constructor (title, description, project, dueDate, priority) {
            this.title = title;
            this.description = description;
            this.project = project;
            this.dueDate = dueDate;
            this.priority = priority;
        }
    }

    let tTitle = document.querySelector('#title').value;
    let tDescription = document.querySelector('#description').value;
    let tDate = document.querySelector('#date').value;
    let tPriority = document.querySelector('#priority').value;

    let newTodo;
    newTodo = new todo(tTitle, tDescription, tDate, tPriority);
    todoList.push(newTodo);
    document.forms[0].reset;
    console.log(todoList);
}

export {
    createTodo,
    todoList
}