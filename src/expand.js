function expandProject() {
    const expand = document.getElementsByClassName("pTitle");

    for (let i = 0; i < expand.length; i++) {
        expand[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "rem";
            }
        });
    }
}

function expandTodo() {
    const expand = document.getElementsByClassName("taskTitle");

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

export {
    expandProject,
    expandTodo
}