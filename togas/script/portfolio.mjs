import { getDatafromAPI, getDataFromJSON } from "./externalSources.mjs";

const apiJSONFile = "https://galiciaabraham.github.io/wdd330-togas/togas/json/apikey.json";
const apiKey = await getDataFromJSON(apiJSONFile);
const urlGraduation = `https://pixabay.com/api/?key=${apiKey.key}&q=graduation&image_type=photo&safesearch=true`;
const urlCeremony = `https://pixabay.com/api/?key=${apiKey.key}&q=graduation%20ceremony&image_type=photo&safesearch=true`;
const urlPortrait = `https://pixabay.com/api/?key=${apiKey.key}&q=graduation%20portrait&image_type=photo&safesearch=true`;


async function getPhotos(url = urlGraduation){
    let photos = await getDatafromAPI(url);
    return photos;
}

export async function filterPhotos(query = "graduation", limit = 4){
    if (query == "graduation") {
        return getPhotosWithQuery(urlGraduation, limit);
        } else if (query == "ceremony") {
            return getPhotosWithQuery(urlCeremony,limit);
        } else if (query == "portrait") {
            return getPhotosWithQuery(urlPortrait, limit);
        }
} 

function limitNumber(list, limit){
    if (list.length >= limit){
        return false;
    } else {
        return true;
    }
};

function getRandomIndex(list){
    let i = 0;
    i = Math.floor(Math.random()* list.length);
    return i;
}

function checkRepeated(list,id){
    let currentId = id;
    list.map((element)=>{
        if(element.id == currentId){
            return true;
        } else {
            return false;
        }
    })
}

async function getPhotosWithQuery(url, limit){
    let newPhotosList =[];
    let photosList = await getPhotos(url);
    let photossrcs = photosList.hits;
        while(limitNumber(newPhotosList, limit)){
            let selectedPhoto = photossrcs[getRandomIndex(photossrcs)];
            if(checkRepeated(newPhotosList,selectedPhoto.id)){
                selectedPhoto = photossrcs[getRandomIndex(photossrcs)];
            } else {
            newPhotosList.push(selectedPhoto);
            }
        } 
    return newPhotosList;
}
