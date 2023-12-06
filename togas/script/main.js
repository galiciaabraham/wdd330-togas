import { hamburgerMenu, getCurrentYear, firstTimeVisit, getLocalStorage } from "./utils.mjs";

const yearBox = document.querySelector(".current-year");
getCurrentYear(yearBox);
hamburgerMenu();
firstTimeVisit();



