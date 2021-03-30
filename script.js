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


 //générer un nombre entre 0 et 14 qui correspondra à l'index des attd
/*function generateGroup1() {
    while (group1.length < 8) {
        var randomiser = Math.floor(Math.random()*15);
        if (group1.indexOf(randomiser) === -1) group1.push(randomiser)
    }
    
       return group1;
}
console.log(generateGroup1())*/

//générer un tableau comprenant 7 valeurs comprises entre 0 et 14 et différentes des valeurs du group1
/*function generateGroup2() {
    while (group2.length < 7) { // 7 valeurs
        var randomiser2 = Math.floor(Math.random()*15);//valeur comprise entre 0 et 14 inclus
        if (group2.indexOf(randomiser2) === -1) { // vérifier que la valeur n'est pas déjà présente dans le tableau 2
            //vérifier que la valeur n'est pas présente dans le tableau 1
            //if (group1.randomiser2) 
            //est-ce que la valeur de l'index group2 est différent de la valeur de l'index de group1
        
            group2.push(randomiser2)
        }
        //group2.length++
        return group2;
    }
}*/
    
       
//console.log(generateGroup2())

//itérer dans le tablo 1
/*for (let i = 0; i < group1.length; i++){
    var randomiser2 = Math.floor(Math.random()*15);
    if (group1[i] != randomiser2) {
        /*while (group2.length < 7) {
            
            if (group2.indexOf(randomiser2) === -1){
                group2.push(randomiser2)
            } 
            console.log(group2);
        }
        console.log(`randomiser : ${randomiser2} - group1 : ${group1[i]}`)
    }
}*/
/*
 != group1.indexOf(generateGroup1())){
function generatePosition() {
    var randomiser = Math.floor(Math.random()*15);
    return randomiser;
}*/
//console.log(generatePosition()) FONCTIONNE

/*function generateGroup1() {
    var findIndex = group1.indexOf(generatePosition())
    while (group1.length < 8) {
        //if ( findIndex === -1) {
            group1.push(findIndex)
        //}
        group1++;
    }
    
       return group1;
}
console.log(generateGroup1())*/

//stocker dans le tableau group1 les 8 premières valeurs aléatoires qu'on considèrera comme index du tableau attd
/*function getFirstEight() {
    for (let i = 0; i < 8; i++) {
        group1[i] = generatePosition()
    }
}

for (let i = 0; i < 14; i++) {
    if (i < 8) {
        group1[i] = generatePosition()
    }

    if (i > 8) {
        group2[i] = generatePosition()
    }
}*/
// à chaque tour il faut veiller à ce qu'un nombre soit différent


//TODO essayer de passer dans la variable attd avec une boucle for...in
// à chaque tour il faut veiller à ce qu'un nombre soit différent
/*for (let i in attd) {
    if (i < 8) {
        group1[i] = attd[generatePosition()]
        console.log(generatePosition())

    }
    if (i > 8) {
        group2[i] = attd[generatePosition()]
    }
}*/
