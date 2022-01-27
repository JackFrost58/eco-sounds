import {i18Obj, LIST_CHANGE_BG_COLOR } from "./translate.js";

function getTranslate(language) {
    const items = document.querySelectorAll('[data-i18]');
    items.forEach((element) => {
        let text = i18Obj[language][element.dataset.i18];
        if(element.placeholder) {
            element.placeholder = text;
            element.textContent = '';
        } else {
            element.innerHTML = text;
        } 
    })  
}

function changeLang(event){
    const activeButton = document.querySelector('.header-container-switch__button_checked');
   
    if(!event.target.classList.contains('header-container-switch__button_checked')){
        event.target.classList.add('header-container-switch__button_checked');
        activeButton.classList.remove('header-container-switch__button_checked');
    } 

    getTranslate(event.target.innerHTML);
}

function closeMenu(event) {
    const hamburgerElements = document.querySelectorAll('.hamburger__line');
    const navLinks = document.querySelector('.header-container__menu');

    navLinks.classList.toggle('header-container__menu-active');
    hamburgerElements.forEach((element) => {
        element.classList.toggle('active');
    })
}

function changeTheme(event) {
    const body = document.body;
    const icon = document.querySelector('.header-container__svg-icon');
    body.classList.toggle('active-theme');

    if(body.classList.length === 1) {
        icon.children[0].setAttribute('href', './assets/svg/sprite.svg#moon');
    } else {
        icon.children[0].setAttribute('href', './assets/svg/sprite.svg#sun');
    }
    

    LIST_CHANGE_BG_COLOR.forEach((element) => {
        let items = document.querySelectorAll('.' + element);
    
        items.forEach((item) => {
            item.classList.toggle('active-theme');
        })
        
    })
}

export {getTranslate, changeLang, closeMenu, changeTheme}