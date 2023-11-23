import { hamburgerMenu, getCurrentYear } from "./utils.mjs";

const yearBox = document.querySelector(".current-year");
getCurrentYear(yearBox);
hamburgerMenu();