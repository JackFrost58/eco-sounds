const navLinks = document.querySelector(".header-container__menu");
const hamburger = document.querySelector(".hamburger");
const hamburgerElements = document.querySelectorAll(".hamburger__line"); 

hamburger.addEventListener("click", closeMenu)

function closeMenu(event) {
    navLinks.classList.toggle("header-container__menu-active");
    hamburgerElements.forEach((element) => {
        element.classList.toggle('active');
    })
    
}



console.log(" Оценка: 110/100 \n 1. Верстка валидная +10 \n 2. Вёрстка семантическая +20 \n 3. Верстка соответствует макету +48 \n 4. Требования к сss выполнены +12 \n 5. Реализована интерактивность через css +20")