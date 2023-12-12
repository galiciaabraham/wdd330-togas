import { getDatafromAPI, getDataFromJSON } from "./externalSources.mjs";

const apiJSONFile = "https://galiciaabraham.github.io/wdd330-togas/togas/json/apikey.json";
const apiKey = await getDataFromJSON(apiJSONFile);
const url1 = `https://pixabay.com/api/?key=${apiKey}&q="graduation"&orientation="horizontal"`;

export async function getPhotos(url = url1){
    let photos = getDatafromAPI(url);
    console.log(photos);
}

