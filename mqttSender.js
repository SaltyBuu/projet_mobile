import mesuresJson from "./mesures.json"




let nbMesures = () => {
    return Object.keys(mesuresJson).length;
};
console.log("nbMesures = "+nbMesures);

//'{\"id\":20,\"temperature\":40,\"Humidity\":35\}'
function aleaTrame(){
    var trame = '{\"id\":';
    var id = Math.floor(Math.random() * 30);
    var nbChamps = Math.floor(Math.random() * 4);
    trame += id;
    for(var i = 0;i < nbChamps;i++){
        var aleaMesure = mesuresJson.mesures[Math.floor(Math.random() * nbMesures)];
        var val = 0;
        if (aleaMesure.data)
        trame += 4;
    }
   

}

//Simulation de trames MQTT
init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    reconnect: true,
    sync : {
    }
  }); 

  function onConnect() {
    console.log("Connexion processus qui envoie les trames");
    client.subscribe("projtut");
    var msg = aleaTrame();
    var message = new Paho.MQTT.Message("Salut dev");
    message.destinationName = "projtut";
    client.send(message);
    console.log("Message sent");
  }
  
  function onConnectionLost(responseObject) {   
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }
  
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
    
  }

  const storeData = async (key, value) => {
    try {

      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      // saving error
    }
  }
  const client = new Paho.MQTT.Client("broker.mqttdashboard.com",8000,"randomAledMobiletr");
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  while(true) {
      client.connect({ onSuccess:onConnect});
  }
