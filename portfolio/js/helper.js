import i18Obj from "./translate.js";
console.log(i18Obj)

function getTranslate(language) {
    const items = document.querySelectorAll('[data-i18]');

    //if (language === 'ru') {
        items.forEach((element) => {
            console.log(i18Obj.language)
          //element.innerHTML = i18Obj.language.element.dataset.i18;
        })
    //}
}

export default getTranslate