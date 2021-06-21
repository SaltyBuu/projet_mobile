import mesuresJson from "./mesures.json"

let nbMesures = () => {
    return Object.keys(mesuresJson.mesures).length;
};
console.log("nbMesures = "+nbMesures);

//'{\"id\":20,\"temperature\":40,\"Humidity\":35\}'
export function aleaTrame(){
    var trame = '{\"id\":';
    var id = Math.floor(Math.random() * 30);
    console.log('Id = ' +  id);
    var nbChamps = Math.floor(Math.random() * 4);
    console.log("NbChamps = " + nbChamps);
    trame += id;
    for(var i = 0;i < nbChamps;i++){
        var aleaMesure = mesuresJson.mesures[Math.floor(Math.random() * nbMesures)];
        var val = 0;
        if (aleaMesure.type != "location") {
            val = math.floor(Math.random() * (aleaMesure.max - aleaMesure.min) + aleaMesure.min);
            console.log("Val = " + val);
        }
        trame += ',\"' + aleaMesure.key + '\":' + val;
    }
    console.log("Trame = "+ trame);
    return trame

}

