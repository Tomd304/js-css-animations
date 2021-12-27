let numberOfImgs = document.querySelectorAll('.small-img').length
let containerSize = 1
let scrollLimit = numberOfImgs - containerSize
let scrolled = 0
let reel = document.querySelector('.image-reel')
let slider = document.querySelector('#myRange') 

function getSliderValue() {
    return parseInt(slider.value)
}

slider.max = scrollLimit
slider.value = 0
createCircles()
let circles = document.querySelectorAll('.circle')
createCircleListeners()
circles[0].classList.add('active')


document.querySelector('.left-btn').addEventListener(('click'), () => {
    if (slider.value > 0) {
        slider.value = getSliderValue() - 1
        moveReel()
    }
})

document.querySelector('.right-btn').addEventListener(('click'), () => {
    if (slider.value < scrollLimit) {
        slider.value = getSliderValue() + 1
        moveReel()
    }
})

imgs = document.querySelectorAll('.small-img')
imgs.forEach((img) => {
    img.addEventListener('click', () => {
        document.querySelector('.big-img').src = img.src
    })
})




/*
setInterval(() => {   
    if (slider.value < scrollLimit) {    
        slider.value = getSliderValue() + 1
        moveReel()
    }
}, 1000)
*/

slider.oninput = () => {
    moveReel()
}

function moveReel() {
    updateCircles()
    reel.style.left = `${slider.value * -150}px`
}



function updateCircles() {
    circles.forEach((circle) => {
        circle.classList.remove('active')
    })
    circles[slider.value].classList.add('active')
}

function createCircles() {
    let circle = document.createElement('div')
    circle.classList.add('circle')
    for (let i = 0; i < numberOfImgs; i++) {
        let circle = document.createElement('div')
        circle.classList.add('circle')
        circle.dataset.index = i
        document.querySelector('.circles').appendChild(circle)
    }
}

function createCircleListeners() {
    circles.forEach((circle) => {
        circle.addEventListener('click', () => {
            console.log(slider.value)
            slider.value = circle.dataset.index
            console.log(slider.value)
            moveReel()
        })
    })
}