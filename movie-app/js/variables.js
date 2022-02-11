const NAME_ELEMENTS = ['h3', 'span']; 
const NAME_CLASSES = {
    'info': ['cards-container__card-title', 'cards-container__card-mark'],
    'overview': ['cards-container__card-title', 'cards-container__text']
}
const NAME_POPULAR_FILMS = ['Transformers', 'Spider-man', 'Batman', 'Iron man'];
const API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w1280';
const POPULAR_MOVIE = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`

export {NAME_ELEMENTS, NAME_CLASSES, SEARCH_API, NAME_POPULAR_FILMS, IMAGE_URL, POPULAR_MOVIE}