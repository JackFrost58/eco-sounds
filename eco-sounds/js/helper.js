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

        changeActiveButton(button, 'button_pressed');
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
    containerCard.appendChild(createAudio(nameBird));
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

    button.addEventListener('click', playSong);

    return button;
}

function createAudio(nameBird) {
    const elemAudio = createElement('audio');
    const translateBird = TRANSLATE_NAME_BIRDS[nameBird]
    
    elemAudio.src = './assets/audio/' + translateBird + '.mp3';

    return elemAudio;
}

function playSong() {
    const elemAudio = document.querySelector('audio');
    switchIconButton();

    const state = getStateButton();

    if(state === 'play') {
        elemAudio.currentTime = 0;
        elemAudio.play()
    } else {
        elemAudio.pause();
    }
}

function switchIconButton() {
    const svg = document.querySelector('.icon-button');
    const svgUse = svg.children[0];
    const hrefSvg = svgUse.href.baseVal;
    const regex = new RegExp('play')
    
    if(regex.test(hrefSvg)){
        svgUse.setAttribute('xlink:href', './assets/svg/sprite.svg#pause');
        saveStateButton('play')
    } else {
        svgUse.setAttribute('xlink:href', './assets/svg/sprite.svg#play')
        saveStateButton('pause');
    }
}

function saveStateButton(state) {
    localStorage.setItem('state-button', state);
}

function getStateButton() {
    const stateButtonPlay = localStorage.getItem('state-button');

    return stateButtonPlay; 
}

function changeActiveButton(currentButton, nameClassActiveButton) {  
    if(!currentButton.classList.contains(nameClassActiveButton)){
        const activeButton = document.querySelector('.' + nameClassActiveButton);

        if(activeButton) {
            activeButton.classList.remove(nameClassActiveButton);
        }
        
        currentButton.classList.add(nameClassActiveButton);
    }
}

export {createButtons, changeCard};