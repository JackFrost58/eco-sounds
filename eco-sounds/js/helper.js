import { descriptionBirds, nameButtons } from "./variables.js";

function createButton() {
    const listButtons = document.querySelector('.list-buttons');

    nameButtons.forEach(element => {
        const button = document.createElement('button');

        button.className = 'button';
        button.innerHTML = element;
        listButtons.appendChild(button);
    });
}

export {createButton};