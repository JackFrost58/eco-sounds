import i18Obj from "./translate.js";

function getTranslate(language) {
    const items = document.querySelectorAll('[data-i18]');
    items.forEach((element) => {
        element.innerHTML = i18Obj[language][element.dataset.i18]
        if(element.pla);
    })
   
}

export default getTranslate