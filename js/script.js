
let img_card1 = document.getElementById('img_card1');
let img_card2 = document.getElementById('img_card2');
let img_card3 = document.getElementById('img_card3');

//Funcion para añadir una foto aleatoria de una API a una reseña
const addPhoto = () => {
    fetch("https://randomuser.me/api/?results=3")
        .then(datos => datos.json())
        .then(datos => {
            img_card1.src = datos.results[0].picture.medium;
            img_card2.src = datos.results[1].picture.medium;
            img_card3.src = datos.results[2].picture.medium;
        })
}

addEventListener.apply("DOMContentLoaded", addPhoto())