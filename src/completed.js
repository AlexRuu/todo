function completed() {
    let checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked === true) {
                checkbox.parentElement.style.textDecoration = 'line-through';
            }
            else {
                checkbox.parentElement.style.textDecoration = 'none';
            }
        })
    })
}

export {
    completed
}