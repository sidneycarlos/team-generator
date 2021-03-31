//stockage des participants dans une variable

var attd = {
    1: "Alexandre", 2: "Fanny", 3: "Tamara", 4: "Marylise", 5: "Maxime",
    6: "Laurène", 7: "Yohan", 8: "Juan", 9: "Maïalen", 10: "Vincent",
    11: "Noureddine", 12: "Lucas", 13: "Raphael", 14: "Valentin", 15: "Sidney"
}


var number = [];
var groupIndex1 = [];
var groupIndex2 = [];
var groupNamed1 = [];
var groupNamed2 = [];
var framePresentiel = document.getElementById("here");
var frameDistanciel = document.getElementById("distant");
var bouton = document.getElementById("generator");

//démarrer la génération de groupe par le clic
bouton.addEventListener("click", function() {
    framePresentiel.innerText = getGroupName1(getNumber())
    frameDistanciel.innerText = getGroupName2(getNumber())
    framePresentiel.style.listStyleType="circle"
})
//Récupérer des nombres aléatoires
function getNumber() {
    while (number.length < 15) { // générer une liste de 15 valeurs
        var randomiser = Math.floor(Math.random() * 15) + 1; //générer 15 nombres aléatoires partant du chiffre 1 qui serviront d'index
        if (number.indexOf(randomiser) === -1) number.push(randomiser) //gérer les doublons
    }
    return number;
}

//Récupérer une partie de la liste
function getGroupName1() {
    groupIndex1 = number.slice(0, 8) //stocker les 8 premiers index
    for (let i = 0; i < groupIndex1.length; i++) {
        var attdList = attd[groupIndex1[i]]; //passer dans le tableau et donner la valeur de chaque index(prénom)
        groupNamed1[i] = attdList
    }
    return groupNamed1
}

//Récupérer l'autre partie de la liste
function getGroupName2() {
    groupIndex2 = number.slice(8, 15) //stocker les 7 derniers index
    for (let i = 0; i < groupIndex2.length; i++) {
        var attdList2 = attd[groupIndex2[i]]; //passer dans le tableau et donner la valeur de chaque index (prénom)
        groupNamed2[i] = attdList2
    }
    return groupNamed2
}
