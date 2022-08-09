import { renderProjects } from "./projects/renderProject";

function expandProject() {
    const expand = document.getElementsByClassName("pTitle");

    for (let i = 0; i < expand.length; i++) {
        expand[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}

function expandTodo() {

}

export {
    expandProject,
    expandTodo
}