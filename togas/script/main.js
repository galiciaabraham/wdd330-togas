import { hamburgerMenu, getCurrentYear, firstTimeVisit } from "./utils.mjs";
import { filterPhotos } from "./portfolio.mjs";

const yearBox = document.querySelector(".current-year");
getCurrentYear(yearBox);
hamburgerMenu();
firstTimeVisit(renderFirstTimeCard);

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

  const photosContainer = document.querySelector(".portfolio");

  function clear(parentElement){
    while(parentElement.firstChild){
      parentElement.removeChild(parentElement.firstChild);
    }
  }

  async function renderPhotos(query,limit = 4 ){
  let photos = await filterPhotos(query,limit);
  photos.forEach(photo => {
    photosContainer.insertAdjacentHTML("beforeend",`<picture class="picture-1">
    <img src="${photo.webformatURL}" 
    alt="This is a graduation picture">
    </picture>`);  
  });
  }
  let gradBnt = document.querySelector(".grad-btn");
  let ceremBtn = document.querySelector(".cerem-btn");
  let portBtn = document.querySelector(".port-btn");
  
  gradBnt.addEventListener("click", () =>{ 
    console.log("clicked");
    clear(photosContainer);
    renderPhotos("graduation")});
  ceremBtn.addEventListener("click", () =>{ 
    clear(photosContainer);
    console.log("clicked");
    renderPhotos("ceremony")});
  portBtn.addEventListener("click", () =>{ 
    clear(photosContainer);
    renderPhotos("portrait")
    console.log("clicked");});



  


