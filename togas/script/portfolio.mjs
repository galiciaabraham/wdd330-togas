import { createApi } from "unsplash-js";
import { getDataFromJSON } from "./externalSources.mjs";

const apiKey = await getDataFromJSON("https://galiciaabraham.github.io/wdd330-togas/togas/json/apikey.json");

const browserApi = createApi({apiUrl: apiKey});