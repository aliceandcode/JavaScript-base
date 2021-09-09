'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};


let divContent = document.querySelector('.text');
let navLink = document.querySelectorAll('.nav-link');

navLink.forEach(function (link) {
    link.addEventListener('click', (event)=>{
        clickHandler(event);
    });
});


function clickHandler(event) {
    changeText(event);
    changeActiveClass(event);
}


function changeActiveClass(event) {
    if(event.target.classList.contains('active')) {
        event.target.classList.remove('active')
    } else {
        event.target.classList.add('active');
    }
}

function changeText(event) {
    if(event.target.textContent == 'Link 1'){
        divContent.innerText = texts.text1;
    } else if (event.target.textContent == 'Link 2'){
        divContent.innerText = texts.text2;
    } else if(event.target.textContent == 'Link 3'){
        divContent.innerText = texts.text3;
    }
}