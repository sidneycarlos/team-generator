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
        var randomiser = Math.floor(Math.random()*15)+1;
        if (number.indexOf(randomiser) === -1) number.push(randomiser)
    }
    
       return number;
}
console.log(generateNumber())


/*function generateGroup() {
    for (let i = 0; i < number.length; i++) {
        var attdList = attd[number[i]];
        if (i <= 7) {
            group1[i] = attdList
        }
        if (i >= 8) {
            group2[i] = attdList
        }

    }*/

function generateGroup1() {
    for (let i = 0; i < number.length; i++) {
        var attdList = attd[number[i]];
        if (i <= 7) {
            group1[i] = attdList
        }
    }
    return group1    

}
console.log(generateGroup1(generateNumber()));

function generateGroup2() {
    for (let i = 8; i < number.length ; i++) {
        var attdList2 = attd[number[i]];
        group2[i] = attdList2
    }
    return group2
}    
console.log(generateGroup2(generateNumber()));

console.log(group2[10])