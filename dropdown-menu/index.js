document.querySelector('button').addEventListener('click', () => {
    let list = document.querySelector('ul')
    if (list.classList.contains('shown')) {
        list.classList.remove('shown')
    }
    else {
        list.classList.add('shown')
    }
})