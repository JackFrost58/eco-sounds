import { createButtons, setMainPage } from "./helper.js";

const logo = document.querySelector('.logo');

logo.addEventListener('click', setMainPage);

window.addEventListener('load', () => {
    createButtons();
    setMainPage();
})