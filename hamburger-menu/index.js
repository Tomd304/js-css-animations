document.querySelector('#burger-button').addEventListener('click', () => {
    let navItems = document.querySelector('.nav-items')
    if (navItems.style.display == 'flex') {
        navItems.style.display = 'none'
    }
    else {
        navItems.style.display = 'flex'
    }
})