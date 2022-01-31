import {closeMenu, changeLang, changeTheme, changePhotos, setLocalStorage, getLocalStorage, switchThemeLinks} from './helper.js';


const hamburger = document.querySelector('.hamburger');
const buttonSwitch = document.querySelector('.header-container-switch');
const navLinks = document.querySelector('.header-container__menu');
const buttonTheme = document.querySelector('.header-container__button');
const buttonsSeasons = document.querySelector('.portfolio-container__buttons');
const body = document.body

hamburger.addEventListener('click', closeMenu);
navLinks.addEventListener('click', closeMenu);
buttonSwitch.addEventListener('click', changeLang);
buttonTheme.addEventListener('click', changeTheme);
buttonsSeasons.addEventListener('click', changePhotos)
body.addEventListener('mousemove', () => {
    if(window.innerWidth > 770) switchThemeLinks('remove');
})


window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);

console.log(" Оценка: 85/75 \n 1. Смена изображений в секции portfolio +25 \n 2. Перевод страницы на два языка +25 \n 3. Переключение светлой и тёмной темы +25 \n 4. Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5 \n 5. Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5");