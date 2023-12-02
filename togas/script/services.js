import { hamburgerMenu, getCurrentYear } from "./utils.mjs";
import { getDataFromJSON } from "./externalSources.mjs";

getCurrentYear();
hamburgerMenu();

const urlJSON = "https://galiciaabraham.github.io/wdd330-togas/togas/json/serv.json";

const servicesDescCont = document.querySelector(".services-description");

const servicesData = getDataFromJSON(urlJSON);

console.log(servicesData);
servicesDescCont.textContent = `${servicesData.services.message}`;
