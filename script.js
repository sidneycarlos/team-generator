//stockage des participants dans une variable

var attd = [
    "Alexandre","Fanny", "Tamara",
    "Marylise","Maxime","Laurène",
    "Yohan","Juan","Maïalen",
    "Vincent","Noureddine","Lucas",
    "Raphael","Valentin","Sidney"
    ]
    
    
    var names = [];
    var group1 = [];
    var group2 = [];
    var framePresentiel = document.getElementById("here");
    var frameDistanciel = document.getElementById("distant");
    var bouton = document.getElementById("generator");
    
    
    //démarrer la génération de groupe par le clic
    bouton.addEventListener("click", function() {
        framePresentiel.innerText = divideInGroups(getNames(getNumbers), 0, 8);;
        frameDistanciel.innerText = divideInGroups(getNames(getNumbers), 8, 15);
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
    function getNumbers() {
        var number = [];
        while (number.length < 15) { // générer une liste de 15 valeurs
            var randomiser = Math.floor(Math.random() * 15); //générer 15 nombres aléatoires qui serviront d'index
            if (number.indexOf(randomiser) === -1) number.push(randomiser) //gérer les doublons
        }
        return number;
    }
    
    function getNames(groupIndex) {
        for (let i = 0; i < groupIndex.length; i++) {
            names[i] = attd[groupIndex[i]]; //passer dans le tableau et donner la valeur de chaque index(prénom)
        }
        return names;
    }
    getNames(getNumbers())
    
    function divideInGroups(arr, minIndex, maxIndex) {
        var groups = arr.slice(minIndex, maxIndex)
        return groups
    }
    
    group1= divideInGroups(getNames(getNumbers), 0, 8);
    group2= divideInGroups(getNames(getNumbers), 8, 15);
    
    console.log(group1);
    console.log(group2);
    
    /*test
    function getGroupName1(arr, minIndex, maxIndex) {
        groupIndex = arr.slice(minIndex, maxIndex) //stocker les 8 premiers index
        for (let i = 0; i < groupIndex.length; i++) {
            groupNamed1[i] = attd[groupIndex1[i]]; //passer dans le tableau et donner la valeur de chaque index(prénom)
        }
        return groupNamed1
    }*/
    
    //Récupérer une partie de la liste
    /*function getGroupName1(groupIndex1) {
        groupIndex1 = number.slice(0, 8) //stocker les 8 premiers index
        for (let i = 0; i < groupIndex1.length; i++) {
            groupNamed1[i] = attd[groupIndex1[i]]; //passer dans le tableau et donner la valeur de chaque index(prénom)
        }
        return groupNamed1
    }
    
    //Récupérer l'autre partie de la liste
    function getGroupName2(groupIndex2) {
        groupIndex2 = number.slice(8, 15) //stocker les 7 derniers index
        for (let i = 0; i < groupIndex2.length; i++) {
            groupNamed2[i] = attd[groupIndex2[i]]; //passer dans le tableau et donner la valeur de chaque index (prénom)
        }
        return groupNamed2
    }
    
    //Fonction pour vider la table
    myResetTable.addEventListener("click", (e)=> {
        e.preventDefault();
    
    document.getElementById("allGroup").innerHTML = "";
    document.getElementById("groupe1").innerHTML = "";
    document.getElementById("groupe2").innerHTML = "";
    
    
    
    });*/
    
    
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