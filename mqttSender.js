//Fichier servant uniquement à la gestion des trames mqtt


//On importe le fichier json contenant les types, min et max de chaque mesure, 
//il servira à générer des trames et traiter les trames entrantes
import mesuresJson from "./mesures.json"

//getmesuresTab boucle sur le json pour le traduire en tableau d'objets javascript
//La fonction est exportée pour pouvoir être utilisée dans d'autres parties de l'application
export function getmesuresTab() {
    const returnedTab = [];
    Object.keys(mesuresJson.mesures).forEach(key =>
        returnedTab.push({name: key, type: mesuresJson.mesures[key].type, min: mesuresJson.mesures[key].min, max: mesuresJson.mesures[key].max}));
    return returnedTab;
}

//On initialise un tableau avec toutes les caractéristiques des mesures grâce à getmesuresTab()
let mesuresArray = getmesuresTab();
//Le nombre total de mesures va servir à choisir aléatoirement une des mesures dans aleaTrame() 
let nbMesures = mesuresArray.length;

//La fonction exportée aleaTrame() retourne une trame de 1 à 4 mesures aléatoires avec des valeurs aléatoires,
//la trame est au format SmartCampus
export function aleaTrame(){
    //On initialise la trame
    var trame = '{\"id\":';
    //ici l'id est un entier entre 1 et 30, choix arbitraire
    var id = Math.floor(Math.random() * 30+1);
    //On détermine le nombre de champs de la trame, de 1 à 4
    var nbChamps = Math.floor(Math.random() * 4+1);
    trame += id;

    //pour chaque champ, on va générer une valeur entre les max et min correspondants
    for(var i = 0;i < nbChamps;i++){
        //On choisit une mesure aléatoire dans le tableau mesuresArray qui contient toutes les infos
        var randomIndex = Math.floor(Math.random() * nbMesures);
        var aleaMesure = mesuresArray[randomIndex];
        //Initialisation de la valeur à 0
        var val = 0;
        if (aleaMesure.type != "location") {
            //Si la valeur est un nombre, elle est générée entre les max et min récupérés
            val = Math.floor(Math.random() * (aleaMesure.max - aleaMesure.min) + aleaMesure.min);
        }
        //Si la valeur est une localisation, valeur par défaut arbitraire
        else val = 48.70;
        trame += ',\"' + aleaMesure.name + '\":' + val;
    }
    //On finit la trame et on la retourne
    trame += '\}';
    return trame

}

