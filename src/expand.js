import { renderProjects } from "./projects/renderProject";

function expand() {
    renderProjects();
    const expand = document.getElementsByClassName("clickToExpand");

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
    expand
}