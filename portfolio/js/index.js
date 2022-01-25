import i18Obj from './translate.js';
import getTranslate from './helper.js';

const navLinks = document.querySelector(".header-container__menu");
const hamburger = document.querySelector(".hamburger");
const hamburgerElements = document.querySelectorAll(".hamburger__line");


hamburger.addEventListener("click", closeMenu);
navLinks.addEventListener("click", closeMenu);


function closeMenu(event) {
    navLinks.classList.toggle("header-container__menu-active");
    hamburgerElements.forEach((element) => {
        element.classList.toggle('active');
    })
}

getTranslate('ru');


//console.log(" Оценка: 85/75 \n 1. Верстка соответствует макету +48 \n 2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +15 \n 3. На ширине экрана 768рх и меньше реализовано адаптивное меню +22")