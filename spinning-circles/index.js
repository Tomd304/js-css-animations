let rotation = 0
document.querySelector('button').addEventListener('click', () => {
    rotation += 90
    let container = document.querySelector('.container')
    container.style.transform = `rotate(${rotation}deg)`
})