/*
resize

scroll

load

wheel

keydown

Select

*/




document.querySelectorAll('.btn').forEach(element => {
    element.addEventListener('click', () => {
        element.style.backgroundColor = 'greenyellow';
        element.style.fontFamily = 'courier new';
        element.style.fontSize = '2.5rem';
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

const header = document.querySelector('img');
header[1].addEventListener('drag', () => {
    header.style.color = 'green';
})





