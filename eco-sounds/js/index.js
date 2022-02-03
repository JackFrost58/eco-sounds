import { createButtons, changeCard } from "./helper.js";

const listButtons = document.querySelector('.list-buttons');

createButtons()

listButtons.addEventListener('click', changeCard);