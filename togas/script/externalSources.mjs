export async function getDataFromJSON(jsonFile){
    let res = await fetch(jsonFile);
    if (res.ok){
        const data = await res.json();
        return data;
    } else {
        console.error(error);
    }
}