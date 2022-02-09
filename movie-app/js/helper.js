import { NAME_CLASSES, NAME_ELEMENTS } from "./variables.js";

function createCards(array) {
    const cardContainer = document.querySelector('.cards-container');
   
    for (let i = 0; i < array.length; i++){
        cardContainer.appendChild(createCard(array[i]));
    }
}


function createCard(object) {
    let urlImage = 0;

    if(object.poster_path !== null) {
        urlImage = 'https://image.tmdb.org/t/p/w1280' + object.poster_path;
    } else {
        urlImage = './assets/image/no-image.jpg'
    }
    
    const title = object.original_title;
    const overview = object.overview;
    const mark = object.vote_average;

    const card = createElement('div');
    card.className = 'cards-container__card';

    card.appendChild(createImage(urlImage, title))
    card.appendChild(createInfo(title, mark))
    card.appendChild(createOverview(overview))

    return card;
}

function createElement(nameElement) {
    const element = document.createElement(nameElement);

    return element;
}

function createInfo(title, mark) {
    const textElement = [title, mark];
    const blockInfo  = createElement('div');
    blockInfo.className = 'cards-container__card-info';

    NAME_ELEMENTS.forEach( (nameElement, index) => {
        const element = createElement(nameElement);
        element.className = NAME_CLASSES['info'][index];
        element.innerHTML = textElement[index];

        blockInfo.appendChild(element);
    });

    const markElement = blockInfo.lastChild;

    switch(true) {
        case mark >= 8:
            markElement.classList.add('cards-container__card-mark-green');
            break;
        case mark < 8 && mark >= 5: 
            markElement.classList.add('cards-container__card-mark-orange');
            break;
        default:
            markElement.classList.add('cards-container__card-mark-red');
    }

    return blockInfo;
}

function createImage(urlImage, altImage) {
    const imageElement = createElement('img')
    imageElement.src = urlImage;
    imageElement.alt = altImage;
    imageElement.className = 'cards-container__card-img';

    return imageElement;
}

function createOverview(text) {
    const textElement = ['Overview', text];
    const blockOverview = createElement('div');
    blockOverview.className = 'cards-container__card-overview';
    
    NAME_ELEMENTS.forEach( (nameElement, index) => {
        const element = createElement(nameElement);
        element.className = NAME_CLASSES['overview'][index];
        element.innerHTML = textElement[index];

        blockOverview.appendChild(element);
    });

    return blockOverview;
}

function getSearchWord() {
    const searchInput = document.querySelector('.search-form__input');
    const searchMovie = searchInput.value; 

    return searchMovie;
}

export { getSearchWord, createCards } 