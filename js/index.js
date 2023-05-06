// Navgation mobile 
let navigationHeaderUl = document.getElementById("navigation-header-ul");
let humbergerIcon = document.getElementById("menu-toggle");

let localisationIcon = document.getElementById("localisation-icon");
let adressToggle = document.getElementById("address-toggle");


humbergerIcon.addEventListener("click", (e) => {
    e.preventDefault;
    navigationHeaderUl.classList.toggle('display');
});

localisationIcon.addEventListener("click", (e) => {
    e.preventDefault;
    adressToggle.classList.toggle('display');
});






