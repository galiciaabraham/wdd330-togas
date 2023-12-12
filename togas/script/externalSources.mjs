export async function getDatafromAPI(url){
  let response = await fetch(url);
  let result = convertToJson(response);
  return result;
}

export async function getDataFromJSON(jsonFile){
    let response = await fetch(jsonFile);
    let result = convertToJson(response);
    return result;
}

function convertToJson(res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Bad Response");
    }
  }
  
