export function hamburgerMenu() {
    const hamburguerButton = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#primary-nav");
    const navBox = document.querySelector(".nav-element");
    hamburguerButton.addEventListener("click",()=>{
        navMenu.classList.toggle("open");
        hamburguerButton.classList.toggle("open");
        navBox.classList.toggle("open");
    })
}