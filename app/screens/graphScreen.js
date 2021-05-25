import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableWithoutFeedback, ActivityIndicator, Platform } from 'react-native';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import { Icon } from 'react-native-elements';
import {MQTT }from 'sp-react-native-mqtt';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function GraphScreen(props) {
    const handlePress = () => console.log("text pressed");
    const orientation = useDeviceOrientation();
    console.log(StatusBar.currentHeight);

    return (
        <SafeAreaView style={styles.container}>
      <View style={styles.bandeSup}>
          <Icon 
          name='chevron-left'
          type='feather'
          color='white'
          />

          <Text style={styles.titre} onPress={handlePress}> Graphiques serveurs</Text>

          <Icon
          name='menu'
          type='feather'
          color='white'
          />
          
      </View >
      
      
        <View style={styles.MainRubriques}>
          <View style={styles.rubriques} >
            <Text>
              Ram
            </Text>
          </View>

          <View style={styles.rubriques}>
          <Text>
            CPU Usage
          </Text>
          </View>

          <View style={styles.rubriques}>
          <Text>
            CPU Temp
          </Text>
          </View>
          
          <View style={styles.rubriques}>
          <Text>
            Disk Storage
          </Text>
          </View>
        </View>
      
      {/* <Text numberOfLines={2} onPress={handlePress}>mtn faut coder lol</Text> 
       <StatusBar style="auto" /> */}
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      // display: 'flex',
      // flexDirection: 'row',
      backgroundColor: '#fff',
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      //alignItems: 'center',
      //justifyContent: 'space-between',
    },
    bandeSup: {
      backgroundColor: '#63003c',
      width: '100%',
      height: '30%',
      display: 'flex',
      flexDirection: 'row',
      // textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'space-around',
  
    },
    titre: {
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
  
    }});

export default GraphScreen;