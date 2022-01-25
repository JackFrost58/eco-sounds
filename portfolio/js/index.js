import i18Obj from './translate.js';
import getTranslate from './helper.js';

const navLinks = document.querySelector('.header-container__menu');
const hamburger = document.querySelector('.hamburger');
const hamburgerElements = document.querySelectorAll('.hamburger__line');
const buttonSwitch = document.querySelector('.header-container-switch')



hamburger.addEventListener('click', closeMenu);
navLinks.addEventListener('click', closeMenu);
buttonSwitch.addEventListener('click', changeLang)

function changeLang(event){
    const activeButton = document.querySelector('.header-container-switch__button_checked');
   
    if(!event.target.classList.contains('header-container-switch__button_checked')){
        event.target.classList.add('header-container-switch__button_checked');
        activeButton.classList.remove('header-container-switch__button_checked');
    } 

    getTranslate(event.target.innerHTML);
}

function closeMenu(event) {
    navLinks.classList.toggle('header-container__menu-active');
    hamburgerElements.forEach((element) => {
        element.classList.toggle('active');
    })
}




//console.log(" Оценка: 85/75 \n 1. Верстка соответствует макету +48 \n 2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +15 \n 3. На ширине экрана 768рх и меньше реализовано адаптивное меню +22")