import {closeMenu, changeLang, changeTheme} from './helper.js';


const hamburger = document.querySelector('.hamburger');
const buttonSwitch = document.querySelector('.header-container-switch');
const navLinks = document.querySelector('.header-container__menu');
const buttonTheme = document.querySelector('.header-container__button');

hamburger.addEventListener('click', closeMenu);
navLinks.addEventListener('click', closeMenu);
buttonSwitch.addEventListener('click', changeLang);
buttonTheme.addEventListener('click', changeTheme);

//console.log(" Оценка: 85/75 \n 1. Верстка соответствует макету +48 \n 2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +15 \n 3. На ширине экрана 768рх и меньше реализовано адаптивное меню +22")