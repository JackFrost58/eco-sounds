import { getMovies } from "./api.js";
import { IMAGE_URL, NAME_CLASSES, NAME_ELEMENTS, NAME_POPULAR_FILMS, SEARCH_API } from "./variables.js";

function createCards(results){
    const cardContainer = document.querySelector('.cards-container');
   
    cardContainer.innerHTML = '';
    
    for (let i = 0; i < results.length; i++){
        cardContainer.appendChild(createCard(results[i]));
    }
}

function createCard(object) {
    let image = 0;

    if(object.poster_path !== null) {
        image = IMAGE_URL + object.poster_path;
    } else {
        image = './assets/image/no-image.jpg'
    }
    
    const title = object.title;
    const overview = object.overview;
    const mark = object.vote_average;

    const card = createElement('div');
    card.className = 'cards-container__card';

    card.appendChild(createImage(image, title))
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

function clearInput(){
    const input = document.querySelector('search-form__input');
    
    input.value = '';
}

function createButtons() {
    const wrapper = document.querySelector('.buttons-wrapper');

    NAME_POPULAR_FILMS.forEach((element) => {
        const buttonElement = createElement('button');
        buttonElement.className = 'buttons-wrapper__button';
        buttonElement.innerHTML = element;

        buttonElement.addEventListener('click', ()=>{
            getMovies(SEARCH_API + element)
        });
        wrapper.appendChild(buttonElement);
    })
    
    
}

export { createCards, createButtons, clearInput } 