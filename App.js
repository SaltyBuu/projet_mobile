import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableWithoutFeedback, ActivityIndicator, Platform } from 'react-native';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks'
import { Colors } from 'react-native/Libraries/NewAppScreen';
//import { Client, Message } from 'react-native-paho-mqtt';
//import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default function App() {
  const handlePress = () => console.log("text pressed");
  const orientation = useDeviceOrientation();
  console.log(StatusBar.currentHeight)



  return (
    
    <SafeAreaView style={styles.container}>
      <View style={styles.bandeSup}>
          <Text style={styles.titre} onPress={handlePress}> Graphiques serveurs</Text>

      </View>
      <View >
        <View style={styles.rubriques}>
          <Text>
            Ram ta maman 
          </Text>
          <Text>
            CPU Usage
          </Text>
          <Text>
            CPU Temp
          </Text>
          <Text>
            Disk Storage
          </Text>
        </View>
      </View>
      {/* <Text numberOfLines={2} onPress={handlePress}>mtn faut coder lol</Text> */}
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  bandeSup: {
    backgroundColor: '#63003c',
    width: '100%',
    height: '25%',
    //flex: 1,
    textAlign: 'center',
    justifyContent: 'center'
  },
  titre: {
    color: 'white',
    display: 'flex',
    textAlign: 'center',
    fontSize: 20
  },
  rubriques: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    textAlign: 'center',
    borderRadius: 4,
    borderColor: '#63003c'
  }

});


