import { createApi } from "https://cdn.jsdelivr.net/npm/unsplash-js@7.0.18/+esm";
import { getDataFromJSON } from "./externalSources.mjs";

const apiKey = await getDataFromJSON("https://galiciaabraham.github.io/wdd330-togas/togas/json/apikey.json");

const browserApi = createApi({apiUrl: apiKey});

export async function getPhotos(prompt){
    browserApi.search.getPhotos(
        {
            query: prompt,
            page: 1,
            perPage: 10,
            orientation: "landscape",
        }
    ).then(result =>{
        if(result.errors) {
            alert("error:", result.source);
        } else {
            const photos = result.response;
            console.log(photos);
        }
    })
}

