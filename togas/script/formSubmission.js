import { hamburgerMenu,getCurrentYear } from "./utils.mjs";
import { setLocalStorage } from "./utils.mjs";

getCurrentYear();
hamburgerMenu();

// e.target would contain our form in this case
document.forms["contact-form"].addEventListener("submit", (e) => {
    //e.preventDefault();
    let myForm = document.forms[0];
    let check_status = myForm.checkValidity();
    myForm.reportValidity();
  
    if (check_status) {
        console.log(e.target);
        const jsonForm = formDataToJSON();
        setLocalStorage("formData", jsonForm);
    }
  });

  function formDataToJSON() {
    const formData = new FormData(document.forms["contact-form"]),
      convertedJSON = {};
  
    formData.forEach(function (value, key) {
      convertedJSON[key] = value;
    });
  
    return convertedJSON;
  }



