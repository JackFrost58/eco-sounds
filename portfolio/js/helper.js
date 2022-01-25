import i18Obj from "./translate.js";

function getTranslate(language) {
    const items = document.querySelectorAll('[data-i18]');
    items.forEach((element) => {
        let text = i18Obj[language][element.dataset.i18];
        if(element.placeholder) {
            element.placeholder = text;
            element.textContent = '';
        } else {
            element.innerHTML = text;
        } 
    })
   
}

export default getTranslate