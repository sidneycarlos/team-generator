//stockage des participants dans une variable


var number = [];
var names = [];
var presentiel = document.getElementById("here");
var distanciel = document.getElementById("distant");
var bouton = document.getElementById("generator");
var reset = document.getElementById("reset")


/**
 * Récupère une liste des stagiaires ****SYNCHRONE*****
 * @returns la liste
 */

function getStudents(callback) {
    var students = ["titi", "toto", "tutu"]
    callback(students)
}

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
 function getNames(groupIndex, gettedList) {
    for (let i = 0; i < groupIndex.length; i++) {
        names[i] = gettedList[groupIndex[i]]; //passer dans le tableau et donner la valeur de chaque index(prénom)
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
    getStudents((stu)=> {
        presentiel.innerText = divideInGroups(getNames(getNumbers(),stu), 0, 8);
        distanciel.innerText = divideInGroups(getNames(getNumbers(),stu), 8, 15);
    })
    
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