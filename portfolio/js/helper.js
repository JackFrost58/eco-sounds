import {i18Obj, ITEM_CHANGE_BG_IMAGE, LIST_CHANGE_BG_COLOR, ALT_IMAGES } from "./translate.js";

function changeActiveButton(currentButton, nameClassActiveButton) {
    const activeButton = document.querySelector('.' + nameClassActiveButton);
    
    if(!currentButton.classList.contains(nameClassActiveButton)){
        activeButton.classList.remove(nameClassActiveButton);
        currentButton.classList.add(nameClassActiveButton);
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

function changeLang(event){
    const currentButton = event.target;
    const nameClassActiveButton = 'header-container-switch__button_checked';
   
    changeActiveButton(currentButton, nameClassActiveButton);
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
    const lines = document.querySelectorAll('.' + ITEM_CHANGE_BG_IMAGE);
    
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

    lines.forEach((element) => {
        element.classList.toggle('active-theme-line');
    });
}

function changePhotos(event) {
    
    const currentButton = event.target;
    const nameClassActiveButton = 'portfolio-container__button_pressed';
    const namePhotoBlock = currentButton.dataset.season;
    const imageContainer = document.querySelector('.portfolio-container__images');
    
    if(currentButton.classList.contains('portfolio-container__button')){
        changeActiveButton(currentButton, nameClassActiveButton);
        
        const arrayImage = Array.from(imageContainer.children)
    
        arrayImage.forEach((element, index) => {
            element.setAttribute('src', './assets/img/' + namePhotoBlock.toLowerCase() + '/portfolio-img_' + (index + 1) + '.jpg');
            element.alt = ALT_IMAGES[namePhotoBlock][index]
        })
    }
}

export {getTranslate, changeLang, closeMenu, changeTheme, changePhotos}