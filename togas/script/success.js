import { hamburgerMenu,getCurrentYear, getLocalStorage } from "./utils.mjs";

getCurrentYear();
hamburgerMenu();

const successMessage = document.querySelector(".success-message");

let clientContactData = getLocalStorage("formData")

successMessage.textContent = `Thank you for reaching out ${clientContactData.fname}, soon one of our representatives will contact you to the email ${clientContactData.email}, we always try to call you first, but if that's no possible we'll send a text message to the number: ${clientContactData.phone}. that you provided.`;
