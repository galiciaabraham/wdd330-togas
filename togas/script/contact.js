import { hamburgerMenu,getCurrentYear } from "./utils.mjs";
import { getDataFromJSON } from "./externalSources.mjs";

getCurrentYear();
hamburgerMenu();

const contactButton = document.querySelector(".contact-button");
contactButton.addEventListener("click", ()=>{
    window.location.href = "./form-submission.html";
})

const contactBox = document.querySelector(".contact-info");

const contactInfoJSONFile = "https://galiciaabraham.github.io/wdd330-togas/togas/json/contactDetails.json";

let contactInfo = await getDataFromJSON(contactInfoJSONFile);

contactBox.innerHTML = `<li>Address: ${contactInfo.contact.information1.address}</li>
<li>Phone Number 1: ${contactInfo.contact.information1.phonenumber1}</li>
<li>Phone Number 2: ${contactInfo.contact.information1.phonenumber2}</li>
<li>E-mail: ${contactInfo.contact.information1.email}`;



