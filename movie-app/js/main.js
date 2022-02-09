import { getData } from "./api.js";
import { createCards, getSearchWord } from "./helper.js";

const { results } = await getData('transformers');

//const form = document.getElementById('search-form');

//form.addEventListener('submit', createCard);

createCards(results);