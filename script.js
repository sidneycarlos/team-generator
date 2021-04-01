//stockage des participants dans une variable

var attd = {
    1: "Alexandre", 2: "Fanny", 3: "Tamara", 4: "Marylise", 5: "Maxime",
    6: "Laurène", 7: "Yohan", 8: "Juan", 9: "Maïalen", 10: "Vincent",
    11: "Noureddine", 12: "Lucas", 13: "Raphael", 14: "Valentin", 15: "Sidney"
}

/** A implémenter dans le code
 * var attd = [
    {id :1, name: "Alexandre", gender : "M", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: false},
    {id :2, name: "Fanny", gender : "F", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: false},
    {id :3, name: "Tamara", gender : "F", availability: {monday:false, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: false},
    {id :4, name: "Marylise", gender : "F", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: false},
    {id :5, name: "Maxime", gender : "M", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: false},
    {id :6, name: "Laurène", gender : "F", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: false},
    {id :7, name: "Yohan", gender : "M", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: false},
    {id :8, name: "Juan", gender : "M", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: false},
    {id :9, name: "Maïalen", gender : "F", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: false},
    {id :10, name: "Vincent", gender : "M", availability: {monday:true, tuesday:true, wednesday:false,thursday:true, friday:true}, partner: false},
    {id :11, name: "Noureddine", gender : "M", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: false},
    {id :12, name: "Lucas", gender : "M", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: true},
    {id :13, name: "Raphael", gender : "M", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: false},
    {id :14, name: "Valentin", gender : "M", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: false},
    {id :15, name: "Sidney", gender : "M", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: true}
]
 */


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
    framePresentiel.innerText = getGroupName1(getNumber());
    frameDistanciel.innerText = getGroupName2(getNumber());
    framePresentiel.style.backgroundColor="white";
    framePresentiel.style.padding="10px 15px"
    framePresentiel.style.opacity="0.9"
    framePresentiel.style.color="#7F3FBF"
    frameDistanciel.style.backgroundColor="white";
    frameDistanciel.style.padding="10px 15px"
    frameDistanciel.style.opacity="0.9"
    frameDistanciel.style.color="#7F3FBF"

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

/** A implémenter dans le code
 * var attd = [
    {id :1, name: "Alexandre", gender : "M", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: "N"},
    {id :2, name: "Fanny", gender : "F", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: "N"},
    {id :3, name: "Tamara", gender : "F", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: "N"},
    {id :4, name: "Marylise", gender : "F", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: "N"},
    {id :5, name: "Maxime", gender : "M", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: "N"},
    {id :6, name: "Laurène", gender : "F", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: "N"},
    {id :7, name: "Yohan", gender : "M", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: "N"},
    {id :8, name: "Juan", gender : "M", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: "N"},
    {id :9, name: "Maïalen", gender : "F", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: "N"},
    {id :10, name: "Vincent", gender : "M", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: "N"},
    {id :11, name: "Noureddine", gender : "M", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: "N"},
    {id :12, name: "Lucas", gender : "M", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: "N"},
    {id :13, name: "Raphael", gender : "M", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: "N"},
    {id :14, name: "Valentin", gender : "M", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: "N"},
    {id :15, name: "Sidney", gender : "M", availability: {monday:true, tuesday:true, wednesday:true,thursday:true, friday:true}, partner: "N"}
]
 */