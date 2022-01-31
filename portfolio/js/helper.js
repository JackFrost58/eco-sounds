import {i18Obj, ITEM_CHANGE_BG_IMAGE, LIST_CHANGE_BG_COLOR, ALT_IMAGES } from "./variables.js";

function changeActiveButton(currentButton, nameClassActiveButton) {
    const activeButton = document.querySelector('.' + nameClassActiveButton);
    
    if(!currentButton.classList.contains(nameClassActiveButton)){
        activeButton.classList.remove(nameClassActiveButton);
        currentButton.classList.add(nameClassActiveButton);
    }
}

function getLocalStorage() {
    if(localStorage.getItem('lang')) {
        const lang = localStorage.getItem('lang');
        const listButtons = document.querySelectorAll('.header-container-switch__button');

        listButtons.forEach((item) => {
            if(item.innerHTML === lang) {
                item.classList.add('header-container-switch__button_checked');
            } else {
                item.classList.remove('header-container-switch__button_checked');
            }
        })

        getTranslate(lang);
    }
    if(localStorage.getItem('theme')){
        const theme = localStorage.getItem('theme')
        getTheme(theme)
    }
}

function setLocalStorage() {
    const lang = document.querySelector('.header-container-switch__button_checked').innerHTML;
    const body = document.body;

    localStorage.setItem('lang', lang);

    if(body.classList.contains('active-theme')){
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

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

function getTheme(theme) {
    const icon = document.querySelector('.header-container__svg-icon');
    
    icon.children[0].setAttribute('href', './assets/svg/sprite.svg#' + theme);

    if(theme === 'dark') {
       changeThemeElements('add');
    } else {
       changeThemeElements('remove');
    }
}

function changeThemeElements(method) {
    const body = document.body;
    const lines = document.querySelectorAll('.' + ITEM_CHANGE_BG_IMAGE);

    body.classList[method]('active-theme');

    LIST_CHANGE_BG_COLOR.forEach((element) => {
        let items = document.querySelectorAll('.' + element);
    
        items.forEach((item) => {
            item.classList[method]('active-theme');
        })
    })

    lines.forEach((element) => {
        element.classList[method]('active-theme-line');
    });
}

function changeLang(event){
    const currentButton = event.target;
    const nameClassActiveButton = 'header-container-switch__button_checked';
   
    if(currentButton.classList.contains('header-container-switch__button')) {
        changeActiveButton(currentButton, nameClassActiveButton);
        getTranslate(currentButton.innerHTML);
    }
    
}

function switchThemeLinks(method) {
    let listNavLinks = document.querySelectorAll('.header-container__link');
    const navContainer = document.querySelector('.header-container__menu');

    console.log('word');
    navContainer.classList[method]('active-light')

    listNavLinks.forEach((element) => {
         element.classList[method]('active-theme');
     })
}

function closeMenu(event) {
    const hamburgerElements = document.querySelectorAll('.hamburger__line');
    const navContainer = document.querySelector('.header-container__menu');
    const body = document.body;

    navContainer.classList.toggle('header-container__menu-active');
    hamburgerElements.forEach((element) => {
        element.classList.toggle('active');
    })

    if(body.classList.contains('active-theme')) {
        hamburgerElements.forEach((element) => {
            element.classList.toggle('active-light');
        })

        switchThemeLinks('add')
    } else {
        switchThemeLinks('remove')
    }
   
}

function changeTheme(event) {
    const body = document.body;
    let theme = '';

    if(body.classList.contains('active-theme')) {
        theme = 'light'
    } else { 
        theme = 'dark'
    }
  
    getTheme(theme);
}

function changePhotos(event) {
    
    const currentButton = event.target;
    const nameClassActiveButton = 'portfolio-container__button_pressed';
    const namePhotoBlock = currentButton.dataset.season;
    const imageContainer = document.querySelector('.portfolio-container__images');
    const arrayImage = Array.from(imageContainer.children)
    
    if(currentButton.classList.contains('portfolio-container__button')){
        changeActiveButton(currentButton, nameClassActiveButton);  
        
        arrayImage.forEach((element, index) => {
            element.setAttribute('src', './assets/img/' + namePhotoBlock.toLowerCase() + '/portfolio-img_' + (index + 1) + '.jpg');
            element.alt = ALT_IMAGES[namePhotoBlock][index]
        })
    }
}

export {getTranslate, changeLang, closeMenu, changeTheme, changePhotos, getLocalStorage, setLocalStorage, switchThemeLinks}