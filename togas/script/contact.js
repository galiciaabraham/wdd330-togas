import { hamburgerMenu,getCurrentYear } from "./utils.mjs";

getCurrentYear();
hamburgerMenu();

const contactButton = document.querySelector(".contact-button");
contactButton.addEventListener("click", ()=>{
    window.location.href = "./form-submission.html";
})