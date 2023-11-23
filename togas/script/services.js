import { hamburgerMenu, getCurrentYear } from "./utils.mjs";
import { getDataFromJSON } from "./externalSources.mjs";

getCurrentYear();
hamburgerMenu();

const urlJSON = "https://galiciaabraham.github.io/wdd330/togas/json/services.json";

const servicesDescCont = document.querySelector(".services-description");

const servicesData = getDataFromJSON(urlJSON);

servicesDescCont.textContent = `${servicesData.services.message}`;
