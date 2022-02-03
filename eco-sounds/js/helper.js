import { DESCRIPTION_BIRDS, LIST_LINKS_BIRDS, ARRAY_NAME_BIRDS, TRANSLATE_NAME_BIRDS } from "./variables.js";

function createButtons() {
    const listButtons = document.querySelector('.list-buttons');

    ARRAY_NAME_BIRDS.forEach(element => {
        const button = document.createElement('button');

        button.className = 'button';
        button.innerHTML = element;
        listButtons.appendChild(button);
    });
}

function changeCard(event) {
    const button = event.target;

    if(button.classList.contains('button')){
        const containerCards = document.querySelector('.cards-container');
        const nameBird = event.target.innerHTML;

        removeCard(containerCards);
        containerCards.appendChild(createCard(nameBird));
    }
}

function removeCard(parent) {
    const child = document.querySelector('.cards-container__card');
    if(child){
        parent.removeChild(child);
    }
}

function createCard(nameBird) {
    const containerCard = createElement('div');
    containerCard.className = 'cards-container__card';

    containerCard.appendChild(createTitle(nameBird));
    containerCard.appendChild(createImage(nameBird));
    containerCard.appendChild(createTitle('Научная классификация'));
    containerCard.appendChild(createDescriptionBird(nameBird));
    containerCard.appendChild(createTitle('Больше информации на'));
    containerCard.appendChild(createLink(nameBird));
    containerCard.appendChild(createTitle('Пение'));
    containerCard.appendChild(createSongButton());

    return containerCard;
}

function createElement(nameElement) {
    const element = document.createElement(nameElement);
    
    return element;
}

function createTitle(nameTitle) {
    const elemSpan = createElement('span');

    elemSpan.className = 'cards-container__text';
    elemSpan.innerHTML = nameTitle;

    return elemSpan;
}

function createImage(nameBird) {
    const elemImage = createElement('img');
    const translateBird = TRANSLATE_NAME_BIRDS[nameBird];

    elemImage.className = 'cards-container__image';
    elemImage.src = './assets/img/' + translateBird + '/bird-' + translateBird + '.jpg';
    elemImage.alt = nameBird;

    return elemImage;
}

function createDescriptionBird(nameBird) {
    const descriptionContainer = createElement('div');
    descriptionContainer.className = 'cards-container__description';

    for (let key in DESCRIPTION_BIRDS[nameBird]) {
        const elemSpan = createElement('span');

        elemSpan.className = 'cads-container__description-text';
        elemSpan.innerHTML = key + ' : ' + DESCRIPTION_BIRDS[nameBird][key];
        descriptionContainer.appendChild(elemSpan);
    }
    
    return descriptionContainer;
}

function createLink(nameBird) {
    const link = createElement('a');

    link.className = 'link';
    link.innerHTML = 'Википедия';
    link.setAttribute('href', LIST_LINKS_BIRDS[nameBird]);

    return link;
}

function createSongButton() {
    const button = createElement('button');
    const nameSvg = `<svg class="icon-button"><use xlink:href="./assets/svg/sprite.svg#play"></use></svg>`

    button.className = 'button-play';
    button.innerHTML = nameSvg;

    return button;
}

export {createButtons, changeCard};