async function getData(searchWord) {
    const API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchWord}`
    const res = await fetch(url);
    const data = await res.json();
    
    return data
}

export {getData};