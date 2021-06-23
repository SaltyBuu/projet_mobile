import mesuresJson from "./mesures.json"


export function getmesuresTab() {
    const returnedTab = [];
    Object.keys(mesuresJson.mesures).forEach(key =>
        returnedTab.push({name: key, type: mesuresJson.mesures[key].type, min: mesuresJson.mesures[key].min, max: mesuresJson.mesures[key].max}));
    console.log("Remplissage de l'array");
    return returnedTab;
}


// mesuresArray.map(function(val, i) {console.log("mesuresArray[" + i +'] : name = '+val.name+', ' 
// +val.type + ', '+ val.min + ', '+val.max)});
let mesuresArray = getmesuresTab();
let nbMesures = mesuresArray.length;
console.log("nbMesures = "+nbMesures);


//'{\"id\":20,\"temperature\":40,\"Humidity\":35\}'
export function aleaTrame(){
    var trame = '{\"id\":';
    var id = Math.floor(Math.random() * 30+1);
    console.log('Id = ' +  id);
    var nbChamps = Math.floor(Math.random() * 4+1);
    console.log("NbChamps = " + nbChamps);
    trame += id;

    for(var i = 0;i < nbChamps;i++){
        var randomIndex = Math.floor(Math.random() * nbMesures);
        var aleaMesure = mesuresArray[randomIndex];
        var val = 0;
        if (aleaMesure.type != "location") {
            val = Math.floor(Math.random() * (aleaMesure.max - aleaMesure.min) + aleaMesure.min);
            console.log("Val = " + val);
        }
        trame += ',\"' + aleaMesure.name + '\":' + val;
    }
    trame += '\}';
    console.log("Trame = "+trame);
    return trame

}

