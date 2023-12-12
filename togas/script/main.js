import { hamburgerMenu, getCurrentYear, firstTimeVisit, getLocalStorage } from "./utils.mjs";
import { getPhotos } from "./portfolio.mjs";

const yearBox = document.querySelector(".current-year");
getCurrentYear(yearBox);
hamburgerMenu();
firstTimeVisit(renderFirstTimeCard);


await getPhotos();

async function renderFirstTimeCard() {
  
    let modal = document.createElement("div");
    modal.classList.add("modal");
  
    let closeBtn = document.createElement("button");
    closeBtn.textContent = "X";
    closeBtn.classList.add("close");
    closeBtn.addEventListener("click", close);
  
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.addEventListener("click", close);
  
    modal.appendChild(closeBtn);
  
    let firstVisitCard = document.createElement("section");
    firstVisitCard.setAttribute("data-modal", "");
    firstVisitCard.insertAdjacentHTML(
      "afterbegin",
      `<h2 id="welcome-title">Welcome to Togas Europa!</h2>
    <p class="welcome-message">Welcome to Togas Europa, where you can find all the relevant information about us. Whether you are looking for ideas, contact information or pricing, you will find exactly what you need. Browse through our gallery, visit our services page and find all contact details in the contact page. Thank you for visiting and enjoy your visit! 😊</p>`
    );
  
    modal.appendChild(firstVisitCard);
  
    document.body.append(modal);
    document.body.append(overlay);
  
    function close() {
      document.body.removeChild(modal);
      document.body.removeChild(overlay);
    }
  }