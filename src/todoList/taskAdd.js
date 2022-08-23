let parentID;

function getProjectID() {
    let add = document.querySelectorAll('.addTask');
    add.forEach((button) => {
        button.addEventListener('click', function() {
            parentID = button.parentElement.parentElement.parentElement.id;
        })
    })
}

export {
    getProjectID,
    parentID
}