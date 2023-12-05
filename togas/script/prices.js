import { hamburgerMenu,getCurrentYear } from "./utils.mjs";
import { getDataFromJSON } from "./externalSources.mjs";
getCurrentYear();
hamburgerMenu();

const pricesJSONFile = "https://galiciaabraham.github.io/wdd330-togas/togas/json/prices.json";

const pricesList = document.querySelector(".prices-list");

let pricesListData = await getDataFromJSON(pricesJSONFile);

let pricesArray = pricesListData.fees;

pricesArray.forEach(element => {
    pricesList.insertAdjacentHTML("beforeend", `<li>${element.packagename} .......... ${element.price}</li> `);
});;