import { hamburgerMenu, getCurrentYear } from "./utils.mjs";
import { getDataFromJSON } from "./externalSources.mjs";

getCurrentYear();
hamburgerMenu();

const urlJSON = "https://galiciaabraham.github.io/wdd330-togas/togas/json/serv.json";

const servicesDescCont = document.querySelector(".services-description");

const servicesData = await getDataFromJSON(urlJSON);

let servicesDetails = servicesData.services[0].services;
let serviceStrenghts = servicesData.services[0].strenghts;

servicesDescCont.textContent = `${servicesData.services[0].message} ${servicesDetails.events} ${serviceStrenghts.personalbusiness}`;

const teamPicture = document.querySelector(".team-photo");
teamPicture.setAttribute("src",servicesData.services[0].teamphoto);

