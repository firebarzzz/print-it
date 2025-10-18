const slides = [
    { "image":"slide1.jpg", "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>" },
    { "image":"slide2.jpg", "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>" },
    { "image":"slide3.jpg", "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>" },
    { "image":"slide4.png", "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>" }
];

let currentSlide = 0;

// Sélection des éléments HTML
const bannerImg = document.querySelector("#banner .banner-img");
const bannerText = document.querySelector("#banner p");
const dotsContainer = document.querySelector("#banner .dots");

// Créer les points et les rendre cliquables
slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if(index === 0) dot.classList.add("dot_selected");

    // Event listener pour aller directement à cette slide
    dot.addEventListener("click", () => {
        showSlide(index);
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

// Fonction pour afficher une slide
function showSlide(index) {
    currentSlide = index;
    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
    bannerText.innerHTML = slides[index].tagLine;

    dots.forEach((dot, i) => {
        dot.classList.toggle("dot_selected", i === index);
    });
}

// Création des flèches
const arrowLeft = document.createElement("div");
arrowLeft.classList.add("arrow", "arrow_left");
arrowLeft.innerHTML = "&#10094;";
bannerImg.parentElement.appendChild(arrowLeft);

const arrowRight = document.createElement("div");
arrowRight.classList.add("arrow", "arrow_right");
arrowRight.innerHTML = "&#10095;";
bannerImg.parentElement.appendChild(arrowRight);

// Gestion des flèches pour boucle infinie
arrowLeft.addEventListener("click", () => {
    let next = currentSlide - 1;
    if(next < 0) next = slides.length - 1;
    showSlide(next);
});

arrowRight.addEventListener("click", () => {
    let next = currentSlide + 1;
    if(next >= slides.length) next = 0;
    showSlide(next);
});

// Défilement automatique toutes les 5 secondes
setInterval(() => {
    let next = currentSlide + 1;
    if(next >= slides.length) next = 0;
    showSlide(next);
}, 5000);

// Affiche la première slide au chargement
showSlide(0);