//import css from "./styles/animal.css";
let urlOfAnimalApi = "https://zoo-animal-api.herokuapp.com/animals/rand";

var listOffavoriteAnimals = new Set();
var currentAnimal;

export function randomAnimalButtonFunction() {
    console.log("unhtiddem");
    document.getElementById("animalDiv").style.visibility = 'visible';
    document.getElementById("favoritAnimalsTable").style.visibility = 'collapse';

    displayAnimalData();
}

async function displayAnimalData() {
    var animalData = await getJSONFromWebsite(urlOfAnimalApi);

    drawAnimal(animalData);

    drawPicture(animalData["image_link"]);
}

function drawAnimal(animalData) {
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

    currentAnimal = null;
    currentAnimal = animalData;
}

function addAnFavorite() {
    listOffavoriteAnimals.add(currentAnimal);
    console.log("add favorite animal to list")
    console.log(listOffavoriteAnimals);
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

function showFavoriteAnimalsTabel() {

    

    console.log("print table\n data:");
    console.log(listOffavoriteAnimals);

    emptyFavoriteTable();
    listOffavoriteAnimals.forEach(fillFavoriteAnimalsTabel);
}

function fillFavoriteAnimalsTabel(item) {
    try {
        console.log("build table\nData:");
        console.log(item);

        var table = document.getElementById("favoritAnimalsTable");
        var row = table.insertRow();

        var name = row.insertCell(0);
        name.innerHTML = item["name"];

        var type = row.insertCell(1);
        type.innerHTML = item["animal_type"];

        var remove = row.insertCell(2);

        var show = row.insertCell(3);

        var removeButton = document.createElement("BUTTON");
        removeButton.innerHTML = "remove";
        removeButton.addEventListener("click", function () {
            removeFromList(item);
            favoriteButtonFunction();
        });

        remove.appendChild(removeButton);

        var showButton = document.createElement("button");
        showButton.innerHTML = "show Animal";
        showButton.addEventListener("click", function () {
            showFavoriteAnimal(item);
            drawPicture(item["image_link"]);
        });
        show.appendChild(showButton);

    } catch (Error) {
        console.log(Error);
    }
}

function removeFromList(item) {
    try {
        console.log("remove faforite begin");
        console.log(listOffavoriteAnimals);

        listOffavoriteAnimals.delete(item);

        console.log(listOffavoriteAnimals);
        console.log("remove faforite end");

    } catch (Error) {

    }
}

function emptyFavoriteTable() {
    var table = document.getElementById("favoritAnimalsTable");
    console.log("länge tabelle "+document.getElementById("favoritAnimalsTable").rows.length);
    console.log(table.rows["length"]);
    for (var i = 1; i < table.rows.length; i++) {

        console.log("lösche zeile = "+i);
        table.deleteRow(i);
        i--;
    }
}

function showFavoriteAnimal(animal) {
    document.getElementById("animalDiv").style.visibility = 'visible';
    document.getElementById("favoritAnimalsTable").style.visibility = 'collapse';
    drawAnimal(animal);
}

function favoriteButtonFunction() {
    console.log("favorite button clicked");

    document.getElementById("animalDiv").style.visibility = 'collapse';
    document.getElementById("favoritAnimalsTable").style.visibility = 'visible';

    try {
        
        showFavoriteAnimalsTabel();
    } catch {

    }
}

console.log("animal Js loaded\nfavorit in loading");
console.log(listOffavoriteAnimals);

if (document.URL.includes("animal.html")) {
    try {
        document.getElementById("animalButton").addEventListener("click", randomAnimalButtonFunction);
        document.getElementById("showFavoriteButton").addEventListener("click", favoriteButtonFunction);
        document.getElementById("addFavoriteAnimalButton").addEventListener("click", addAnFavorite);
    } catch (error) {
        console.log(error);
    }
}
