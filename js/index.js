
const stopNav = document.querySelector('.nav');
stopNav.addEventListener('click', (event) => {
    event.preventDefault();
})


document.querySelectorAll('.destination').forEach(element => {
    element.addEventListener('click', () => {
        element.style.backgroundColor = 'mediumturquoise';
        element.style.padding = '3%';
    })
})

document.querySelectorAll('.btn').forEach(element => {
    element.addEventListener('click', () => {
        element.style.backgroundColor = 'greenyellow';
        element.style.fontFamily = 'courier new';
        element.style.fontSize = '2.5rem';
        event.stopPropagation();
    })
})

document.querySelectorAll('.btn').forEach(element => {
    element.addEventListener('dblclick', () => {
        element.style.backgroundColor = 'darkorange';
        element.style.fontFamily = 'impact';
        element.style.fontSize = '3.5rem';
    })
})

const headerImg = document.querySelector('img');
headerImg.addEventListener('mouseenter', () => {
    headerImg.style.filter = 'invert(80%)';
})

headerImg.addEventListener('mouseleave', () => {
    headerImg.style.filter = 'drop-shadow(15px 15px 10px)';
})

const lastImg = document.querySelector('.content-destination img');
lastImg.addEventListener('wheel', () => {
    lastImg.style.transform = 'scale(2)';
    lastImg.style.transition = 'transform 2s';
})

document.querySelectorAll('h2').forEach(element => {
    element.addEventListener('copy', () => {
        element.style.backgroundColor = 'red';
        element.style.color = 'green';
    })
})

const secondImg = document.querySelector('.content-section img');
secondImg.addEventListener('dragstart', () => {
    secondImg.style.filter = 'drop-shadow(15px 15px 10px cadetblue)';
})

const thirdImg = document.querySelector('.inverse-content img');
thirdImg.addEventListener('mousemove', () => {
    thirdImg.style.border = '5px dashed red';
})

const greenBody = document.querySelector('body');
greenBody.addEventListener('keyup', () => {
    greenBody.style.backgroundColor = 'green';
    greenBody.style.transition = 'transform 2s';
})

const redBody = document.querySelector('body');
    redBody.addEventListener('keydown', () => {
        redBody.style.backgroundColor = 'red';
    })








