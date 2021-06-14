import React from 'react';

//Liste des packages
import {  
    StyleSheet,
    Text, 
    View, 
    ImageBackground, 
    Image, 
    Button,
    StatusBar,
    SafeAreaView,
    TouchableWithoutFeedback,
    ActivityIndicator,
    Platform, 
    TextImput, 
    Plateform,
    ImagePickerIOS, 
    ImageStore,
    Dimensions
  } from 'react-native';
import { createAppContainer } from 'react-navigation';  
import { createStackNavigator} from 'react-navigation-stack';
import { Icon } from 'react-native-elements'; 
import {LineChart,BarChart,PieChart,ProgressChart,ContributionGraph,StackedBarChart} from "react-native-chart-kit";
import init from 'react_native_mqtt';
//import {AsyncStorage} from '@react-native-community/async-storage'
import {AsyncStorage} from 'react-native-async-storage';
//Bail de MQTT
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
    console.log("onConnect");
    client.subscribe("data");
    message = new Paho.MQTT.Message("Salut dev");
    message.destinationName = "data";
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
  
  const client = new Paho.MQTT.Client('localhost', 9001, 'clientId');
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  client.connect({ onSuccess:onConnect});


const styles = StyleSheet.create({

    //Thibault
    container2: {
        // flex: 1,
        // display: 'flex',
        // flexDirection: 'row',
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        //alignItems: 'center',
        //justifyContent: 'space-between',
    },

    titre2: {
        color: 'white',
        display: 'flex',
        textAlign: 'center',
        fontSize: 20
    },

    rubriques: {
      
        flex: 0.25,
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#63003c',
      
      },
    MainRubriques: {
        display: 'flex',
        flexDirection: 'row',
    },

    bandeSup: {
        //backgroundColor: colors.primary,
        width: '100%',
        height: '30%',
        display: 'flex',
        flexDirection: 'row',
        // textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    //*********************************************************************** */
    //MOI
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    graphContainer : {
      width: '100%',
      height: '100%',
    },

    titles : {
      marginTop: '30%',
      width: '100%',
      alignItems: 'center',
    },
    title : {
      color : 'white',
      fontSize:40,
      fontWeight: '600',
    },
    titre: {
        color: 'white',
        display: 'flex',
        textAlign: 'center',
        fontSize: 20
    },
    
    subtitle : {
      fontSize: 16,
      color: 'white'
    },

    subtitleApropos : {
        fontSize: 16,
        color: 'white',
        marginLeft : "10%",
        marginRight : "10%"
      },
      
    image : {
      width : '100%',
      height : '100%',
      resizeMode: 'cover',
      position: 'absolute',
    }
  });

  
//--------------------------------------------------------------------------------------------
  
//Ecran d'accueil 
class HomeScreen extends React.Component {  
    render() {  
        return ( 
            <View style={styles.container}>
                <ImageBackground
                    source={require('./assets/images/IUT-Orsay.png')} 
                    style = {styles.image}
                >
                </ImageBackground>
                <View style={styles.titles}> 
                <Text style = {styles.title}>SmartCampus</Text>
                <Text style = {styles.subtitle}>Données en temps réel</Text>
                <Image 
                style = {{width : 150, height: 150}}
                source = {require('./assets/images/graph.png')}
                />
                <Button  
                    title="Capteurs"  
                    onPress={() => this.props.navigation.navigate('Capteurs')}  
                />
                <Text>  </Text>
                <Button  
                    title="Monitoring serveurs"  
                    onPress={() => this.props.navigation.navigate('MonitoringServeurs')}  
                />
                <Text>  </Text>  
                <Button  
                    title="A propos"  
                    onPress={() => this.props.navigation.navigate('Apropos')}  
                /> 
                </View> 
            </View>  
        );  
    }  
} 

//--------------------------------------------------------------------------------------------

//Ecran d'accueil Capteurs
class CapteursScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>
                <ImageBackground
                    source={require('./assets/images/IUT-Orsay.png')} 
                    style = {styles.image}
                ></ImageBackground>
                 <View style={styles.titles}>
                    <Text style = {styles.subtitle}>Capteurs</Text>
                </View> 
            </View>  
    );  
    }  
}  

//--------------------------------------------------------------------------------------------

//Ecran MonitoringScreen
class MonitoringScreen extends React.Component {  
    render() {  
        return (  
            <SafeAreaView style={styles.container2}>
      <View style={styles.bandeSup}>
          <Icon 
          name='chevron-left'
          type='feather'
          color='white'
          />

          <Icon
          name='menu'
          type='feather'
          color='white'
          />
      </View >
        <View style={styles.MainRubriques}>
          <View style={styles.rubriques} >
            <Text>Ram</Text>
            <Text>X</Text>
          </View>

          <View style={styles.rubriques}>
          <Text> CPU Usage</Text>
          <Text>X</Text>
          </View>

          <View style={styles.rubriques}>
          <Text>CPU Temp</Text>
          <Text>X</Text>
          </View>
          
          <View style={styles.rubriques}>
          <Text>Disk Storage</Text>
          <Text>X</Text>
          </View>
        </View>

        <View>
            <Text>Température en temps réel</Text>
            <LineChart
                data={{
                labels: ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"],
                datasets: [
                    {
                    data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                    ]
                    }
                ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel=""
                yAxisSuffix="°C"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#fb8c00",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726"
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16
                }}
            />
        </View>

        <View>
          <Text>Valeurs moyennes:</Text>
          <Text>Max:</Text>
          <Text>Min:</Text>
          <Text>Ecart type</Text>
        </View>

        <View>
            <Button  
            title="Export"  
            />
        </View>

    </SafeAreaView>
    );  
    }  
}  

class AproposScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>
                <ImageBackground
                    source={require('./assets/images/IUT-Orsay.png')} 
                    style = {styles.image}
                >
                </ImageBackground>
                <Image 
                style = {{width : 150, height: 150}}
                source = {require('./assets/images/graph.png')}
                />
                <View>   
                    <Text style = {styles.subtitleApropos}>Le projet SmartCampus est actuellement réalisé par six partenaires : l’IUT Orsay (MP et Info), Polytech Paris Sud, l’IUT de Cachan, Polytech Tours, l’IUT de Blois et l’IUT de Tours. 
                        Il a pour objectif de concevoir plusieurs systèmes intelligents de mesures multiples générant un flux d’informations valorisables en termes d’indicateurs d’événements, de fréquentation et de conditions environnementales.</Text>
                    <Text> </Text> 
                    <Text style = {styles.subtitleApropos}>Dans ce cadre, le département informatique de se propose de “domotiser” l’IUT d’Orsay. L’ensemble des systèmes développés seront connectés au système de SmartCampus et 
                    apporteront une plus value dans le bien-être des étudiants et des enseignants.</Text>
                    <Text> </Text> 
                    <Text style = {styles.subtitleApropos}>La réalisation de l'application avec les données en temps réel a été fait par Léo Tran, Thibault Dorn, Michel Florantin et Salomon Kamara dans le cadre du projet tutoré de S4</Text>
                </View>
            </View>  
    );  
    }  
}  
  
const AppNavigator = createStackNavigator(  
    {  
        Home: HomeScreen,  //Page Accueil
        Capteurs: CapteursScreen, //Page Capteurs
        MonitoringServeurs : MonitoringScreen, //Page Monitoring Serveurs
        Apropos : AproposScreen //Page A propos
    },  
    {  
        initialRouteName: "Home"  
    }  
);  
  
const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {  
    render() {  
        return <AppContainer />;  
    }  
} 