//stockage des participants dans une variable

var attd = {
    1 : "Alexandre", 2 : "Fanny", 3 : "Tamara", 4 : "Marylise", 5 : "Maxime",
    6 : "Laurène", 7 : "Yohan", 8 : "Juan", 9 : "Maïalen", 10 : "Vincent",
    11 : "Noureddine", 12 : "Lucas", 13 : "Raphael", 14 : "Valentin", 15 : "Sidney"
}
var group1 = [];
var group2 = [];

/*function generatePosition() {
    var randomiser = Math.floor(Math.random()*15);
    return randomiser;

}*/


//chercher dans la variable les index correspondants aux nombres générés et n'en conserver que 8

 //générer un nombre entre 0 et 14 qui correspond à l'index de attendant
 function generatePosition() {
    var randomiser = Math.floor(Math.random()*15);
    for (let i = 0; i < 8; i++) {
        group1[i] = randomiser // j'itère dans ma variable attendant

//TODO => pour cela il faut que je stocke dans un tableau les nombres issu du randomiser
//ensuite le tableau group1 ne devra stocker que les 8 premières itérations 

    }
    return group1;
}



console.log(generatePosition())
