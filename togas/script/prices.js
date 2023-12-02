import { hamburgerMenu,getCurrentYear } from "./utils.mjs";
import { getDataFromJSON } from "./externalSources.mjs";
getCurrentYear();
hamburgerMenu();

const pricesJSONFile = "https://galiciaabraham.github.io/wdd330/togas/json/services.json";

console.log(getDataFromJSON(pricesJSONFile));