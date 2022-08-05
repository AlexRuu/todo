function getProjectID() {
    let add = document.querySelectorAll('.addTodo');
    add.forEach((button) => {
        button.addEventListener('click', function(e) {
            console.log(button.closest('.projectDiv').id)
        })
    })
}

export {
    getProjectID
}