let parentID;

function getProjectID() {
    let add = document.querySelectorAll('.addTask');
    add.forEach((button) => {
        button.addEventListener('click', function() {
            parentID = button.parentElement.parentElement.id;
            console.log(parentID)
        })
    })
}

export {
    getProjectID,
    parentID
}