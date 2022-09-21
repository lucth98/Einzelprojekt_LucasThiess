let urlOfAnimalApi = "https://zoo-animal-api.herokuapp.com/animals/rand";

export function buttonClick() {

    displayAnimalData();
}

async function displayAnimalData() {
    var animalData = await getJSONFromWebsite(urlOfAnimalApi);

    var element = document.getElementById("ImageSource");
    element.innerHTML = animalData["image_link"];

    element = document.getElementById("tbName");
    element.innerHTML = animalData["name"];

    element = document.getElementById("tbLatName");
    element.innerHTML = animalData["latin_name"];

    element = document.getElementById("tbType");
    element.innerHTML = animalData["animal_type"];

    element = document.getElementById("tbDiet");
    element.innerHTML = animalData["diet"];

    element = document.getElementById("tbRange");
    element.innerHTML = animalData["geo_range"];

    element = document.getElementById("tbHabitat");
    element.innerHTML = animalData["habitat"];

    element = document.getElementById("tbMaxLenght");
    element.innerHTML = animalData["length_max"];

    element = document.getElementById("tbMinLenght");
    element.innerHTML = animalData["length_min"];

    element = document.getElementById("tbLifespan");
    element.innerHTML = animalData["lifespan"];

    element = document.getElementById("tbMaxWeight");
    element.innerHTML = animalData["weight_max"];

    element = document.getElementById("tbMinWeight");
    element.innerHTML = animalData["weight_min"];

    drawPicture(animalData["image_link"]);
}

async function drawPicture(url) {
    var picture = document.getElementById("animalPicture");
    picture.src = url;
}

async function getJSONFromWebsite(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

