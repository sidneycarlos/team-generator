//stockage des participants dans une variable

<<<<<<< HEAD
var attd = {
    1: "Alexandre", 2: "Fanny", 3: "Tamara", 4: "Marylise", 5: "Maxime",
    6: "Laurène", 7: "Yohan", 8: "Juan", 9: "Maïalen", 10: "Vincent",
    11: "Noureddine", 12: "Lucas", 13: "Raphael", 14: "Valentin", 15: "Sidney"
}

=======
var trainees = [
    "Alexandre", "Fanny", "Tamara",
    "Marylise", "Maxime", "Laurène",
    "Yohan", "Juan", "Maïalen",
    "Vincent", "Noureddine", "Lucas",
    "Raphael", "Valentin", "Sidney"
]
>>>>>>> fixJS

var number = [];
var names = [];
var presentiel = document.getElementById("here");
var distanciel = document.getElementById("distant");
var bouton = document.getElementById("generator");
var reset = document.getElementById("reset")



/**
 * Récupère 15 nombres
 * @returns les nombres dans un ordre aléatoire
 */
function getNumbers() {
    while (number.length < 15) { // générer une liste de 15 valeurs
        var randomiser = Math.floor(Math.random() * 15); //générer 15 nombres aléatoires qui serviront d'index
        if (number.indexOf(randomiser) === -1) number.push(randomiser) //gérer les doublons
    }
    return number;
}

/**
 * Récupère les noms dans le nouvel ordre
 * @param {*} groupIndex correspond à la liste des index aléatoires
 * @returns les noms des stagiaires dans l'ordre aléatoire
 */
function getNames(groupIndex) {
    for (let i = 0; i < groupIndex.length; i++) {
        names[i] = trainees[groupIndex[i]]; //passer dans le tableau et donner la valeur de chaque index(prénom)
    }
    return names;
}

/**
 * Récupère la liste selon les index
 * @param {*} arr liste des noms aléatoires
 * @param {*} minIndex index de début de la liste
 * @param {*} maxIndex index de fin de la liste
 * @returns un groupe selon l'index de début et l'index de fin
 */
function divideInGroups(arr, minIndex, maxIndex) {
    var groups = arr.slice(minIndex, maxIndex)
    return groups
}


//démarrer la génération de groupe par le clic
bouton.addEventListener("click", () => {
    presentiel.innerText = divideInGroups(getNames(getNumbers()), 0, 8);;
    distanciel.innerText = divideInGroups(getNames(getNumbers()), 8, 15);
    presentiel.style.backgroundColor = "white";
    presentiel.style.padding = "10px 15px"
    presentiel.style.opacity = "0.9"
    presentiel.style.color = "#black"
    distanciel.style.backgroundColor = "white";
    distanciel.style.padding = "10px 15px"
    distanciel.style.opacity = "0.9"
    distanciel.style.color = "#black"
})

//réinitialisation des résultats par le clic
reset.addEventListener("click", () => {
    if (number.length == 15) {
        number = []
    }
})


/** A implémenter dans le code
 * var trainees = [
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