import { format, parseISO, formatDistanceToNowStrict } from 'date-fns'
import { todoList } from "./createTodo";

function buildTodo(todo, number) {
    const taskContainer = document.querySelector(`#task${number}`);
    let task = document.createElement('div');
    let checkbox = document.createElement('input');
    let title = document.createElement('label');
    let taskInfo = document.createElement('div');
    let dueDate = document.createElement('div');
    let description = document.createElement('div');
    let priority = document.createElement('div')
    let buttons = document.createElement('div');
    let edit = document.createElement('button');
    let remove = document.createElement('button');

    task.classList.add('taskDetail');
    task.setAttribute('id', `taskList${todoList.indexOf(todo)}`);

    checkbox.setAttribute('type', 'checkbox');
    checkbox.classList.add('checkbox');
    checkbox.className += ' tasks'

    title.classList.add('taskTitle');
    title.innerText = todo.title
    title.setAttribute('for', `taskList${todoList.indexOf(todo)}`);

    taskInfo.classList.add('expandTask');

    dueDate.classList.add('taskDue');
    let formatted = format(parseISO(todo.dueDate, 1), 'PPP')
    let formatDue = parseISO(todo.dueDate, 1)
    let today = new Date();
    let formatToday = format(today, 'yyyy-MM-dd');
    let difference = formatDistanceToNowStrict(formatDue, {
        unit: 'day'
    })

    if (todo.dueDate >= formatToday) {
        if (difference.substring(0, 3) >= 10 || difference.substring(0, 1) > 5) {
            task.style.background = 'none';
        }
        else if (difference <= '3 days' || difference === '0 days') {
            task.style.background = 'yellow';
        }
        else {
            task.style.border = 'solid red';
        }
    }
    else {
        task.style.border = 'solid red';
    }

    dueDate.innerText = `Due ${formatted}`;

    description.classList.add('taskDescription');
    description.innerText = `Description: ${todo.description}`;

    priority.classList.add('priorityLevel');
    priority.innerText = `Priority: ${todo.priority}`;

    edit.classList.add('editTaskButton');
    edit.setAttribute('id', 'editTaskButton');
    edit.innerHTML = 'Edit';

    remove.classList.add('removeTask');
    remove.innerHTML = 'Delete'

    buttons.classList.add('taskButtons');
    buttons.append(edit, remove)
    taskInfo.append(dueDate, priority, description, buttons)

    task.append(checkbox, title, taskInfo);
    taskContainer.appendChild(task);
};

export {
    buildTodo
}