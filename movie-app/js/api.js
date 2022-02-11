import { createCards } from "./helper.js";

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    const results = data.results;
    
    createCards(results);
}

export {getMovies}