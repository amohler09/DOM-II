/*doubleclick

click

resize

scroll

load

wheel

keydown

Select

mouse enter 

mouse leave*/




document.querySelectorAll('.btn').forEach(element => {
    element.addEventListener('click', () => {
        element.style.backgroundColor = 'greenyellow';
        element.style.fontFamily = 'impact';
        element.style.fontSize = '3rem';
    })
})



