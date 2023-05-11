// Navgation mobile 
let navigationHeaderUl = document.getElementById("navigation-header-ul");
let humbergerIcon = document.getElementById("menu-toggle");

let localisationIcon = document.getElementById("localisation-icon");
let adressToggle = document.getElementById("address-toggle");


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
    
    if (ifOpen(adressToggle) === true) {
        console.log("ouvert ")
        adressToggle.classList.remove("display");
    }
    else {
        console.log("fermer")
    }
});

localisationIcon.addEventListener("click", (e) => {
    e.preventDefault;
    adressToggle.classList.toggle('display');
    if (ifOpen(navigationHeaderUl) === true) {
        navigationHeaderUl.classList.remove("display");
    }

});