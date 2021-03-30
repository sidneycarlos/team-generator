//stockage des participants dans une variable

var attd = {
    1 : "Alexandre", 2 : "Fanny", 3 : "Tamara", 4 : "Marylise", 5 : "Maxime",
    6 : "Laurène", 7 : "Yohan", 8 : "Juan", 9 : "Maïalen", 10 : "Vincent",
    11 : "Noureddine", 12 : "Lucas", 13 : "Raphael", 14 : "Valentin", 15 : "Sidney"
}
var group1 = [];
var group2 = [];



 //générer un nombre entre 0 et 14 qui correspondra à l'index des attd
 function generatePosition() {
    var randomiser = Math.floor(Math.random()*15);
       return randomiser;
}
//stocker dans le tableau group1 les 8 premières valeurs aléatoires qu'on considèrera comme index du tableau attd
/*function getFirstEight() {
    for (let i = 0; i < 8; i++) {
        group1[i] = generatePosition()
    }
}*/

/*for (let i = 0; i < 14; i++) {
    if (i < 8) {
        group1[i] = generatePosition()
    }

    if (i > 8) {
        group2[i] = generatePosition()
    }
}
// à chaque tour il faut veiller à ce qu'un nombre soit différent*/


//TODO essayer de passer dans la variable attd avec une boucle for...in
// à chaque tour il faut veiller à ce qu'un nombre soit différent
for (let i in attd) {
    if (i < 8) {
        group1[i] = attd[generatePosition()]
        console.log(generatePosition())

    }
    if (i > 8) {
        group2[i] = attd[generatePosition()]
    }
}
console.log(group1)
console.log(group2)
