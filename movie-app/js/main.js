import { getMovies } from "./api.js";
import { clearInput, createButtons } from "./helper.js";
import { POPULAR_MOVIE, SEARCH_API } from "./variables.js";


const form = document.getElementById('search-form');
const input = document.querySelector('.search-form__input');
const cross = document.querySelector('.search-form__button-remove');
const logo = document.querySelector('.logo');


createButtons();
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchMovie = input.value;  
    
    if(searchMovie && searchMovie !== ''){
        getMovies(SEARCH_API + searchMovie);
    }
});

cross.addEventListener('click', () => {
    input.value = ''
});

logo.addEventListener('click', () => {
    getMovies(POPULAR_MOVIE);
});

window.addEventListener('onload', getMovies(POPULAR_MOVIE));