// Navgation mobile 
let navigationHeaderUl = document.getElementById("navigation-header-ul");
let humbergerIcon = document.getElementById("menu-toggle");
let horaireIcon = document.getElementById("horaire-icon");

let localisationIcon = document.getElementById("localisation-icon");
let adressToggle = document.getElementById("address-toggle");
let horaireToggle = document.getElementById("horaire-toggle");


function ifOpen(element) {
    if (element.classList.contains("display")) {
        return true;
    }
    else {
        return false;
    }
}

humbergerIcon.addEventListener("click", (e) => {
    e.preventDefault;
    navigationHeaderUl.classList.toggle('display');
    
    if (ifOpen(adressToggle) === true || ifOpen(horaireToggle) === true) {
        adressToggle.classList.remove("display");
        horaireToggle.classList.remove("display");
    }
});

localisationIcon.addEventListener("click", (e) => {
    e.preventDefault;
    adressToggle.classList.toggle('display');
    if (ifOpen(navigationHeaderUl) === true || ifOpen(horaireToggle) === true) {
        navigationHeaderUl.classList.remove("display");
        horaireToggle.classList.remove("display");
    }
});

horaireIcon.addEventListener("click", (e) => {
    e.preventDefault;
    horaireToggle.classList.toggle('display');
    if (ifOpen(navigationHeaderUl) === true || ifOpen(adressToggle)) {
        navigationHeaderUl.classList.remove("display");
        adressToggle.classList.remove("display");
    }
});