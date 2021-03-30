//stockage des participants dans une variable

var attd = {
    1 : "Alexandre", 2 : "Fanny", 3 : "Tamara", 4 : "Marylise", 5 : "Maxime",
    6 : "Laurène", 7 : "Yohan", 8 : "Juan", 9 : "Maïalen", 10 : "Vincent",
    11 : "Noureddine", 12 : "Lucas", 13 : "Raphael", 14 : "Valentin", 15 : "Sidney"
}
var number = [];
var group1 = [];
var group2 = [];

function generateNumber() {
    while (number.length < 15) {
        var randomiser = Math.floor(Math.random()*15);
        if (number.indexOf(randomiser) === -1) number.push(randomiser)
    }
    
       return number;
}
console.log(generateNumber())

function generateGroup() {
    for (let i = 0; i < number.length; i++) {
        if (i <= 7) {
            group1[i] = number[i]
        }
        if (i > 7) {
            group2[i] = number[i]
        }

    }
    console.log(`Ceci est le groupe 1: ${group1}`)
    console.log(`Ceci est le groupe 2: ${group2}`)
}

generateGroup()

