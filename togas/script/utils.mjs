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
const yearBoxDefault = document.querySelector(".current-year");
export function getCurrentYear(box = yearBoxDefault){ 
    let year = new Date().getFullYear();
    box.textContent = `${year}`;

}

export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

export function firstTimeVisit(renderCard){
    let firstVisit = getLocalStorage("first-visit");
    if(firstVisit == "" || firstVisit == null){
        setLocalStorage("first-visit","yes");
        renderCard();
    } else {
        setLocalStorage("first-visit", "no");
    }
}