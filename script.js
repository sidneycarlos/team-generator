//stockage des participants dans une variable

var attendant = {
    1 : "Alexandre", 2 : "Fanny", 3 : "Tamara", 4 : "Marylise", 5 : "Maxime",
    6 : "Laurène", 7 : "Yohan", 8 : "Juan", 9 : "Maïalen", 10 : "Vincent",
    11 : "Noureddine", 12 : "Lucas", 13 : "Raphael", 14 : "Valentin", 15 : "Sidney"
}

//générer un nombre entre 0 et 14 qui correspond à l'index de attendant
/*function generatePosition() {
    var randomiser = Math.floor(Math.random()*15);
    return randomiser;

}*/


//chercher dans la variable les index correspondants aux nombres générés et n'en conserver que 8
/*var result = [];
for (var i in attendant) {
    if (i == randomiser) {
        result[number] = 
    }
    console.log(`${number} : ${attendant[number]}`)
}*/
function generatePosition() {
    var randomiser = Math.floor(Math.random()*15); //génère chiffre aléatoire entre 0 et 15
    for (var i in attendant) { // j'itère dans ma variable attendant
        while (i <= 8) { //je veux ne garder que les 8 premières itérations pour cela il faut qu eje stocke dans un tableau les nombres issu du randomiser
            result[i] = attendant[i];
            i++
        }
        /*if (i < attendant.length) {
            i++;
            
    
        }*/
    }
    console.log(randomiser)
    return result[i];

}
var result = [];


console.log(generatePosition())
console.log(result);