import { todoList } from "./createTodo";

function buildTodo() {
    const content = document.querySelector('.expandContent');
    const todoDiv = document.createElement('div');

    todoDiv.classList.add('todoDiv');
    content.appendChild(todoDiv);
};

export {
    buildTodo
}