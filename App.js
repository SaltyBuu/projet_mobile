import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableWithoutFeedback, ActivityIndicator, Platform } from 'react-native';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import { Icon } from 'react-native-elements';
import {MQTT }from 'sp-react-native-mqtt';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import graphScreen from './app/screens/graphScreen';
//import { Client, Message } from 'react-native-paho-mqtt';
//import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default function App() {
  const handlePress = () => console.log("text pressed");
  const orientation = useDeviceOrientation();
  console.log(StatusBar.currentHeight);


  // /* create mqtt client */
  // MQTT.createClient({
  //   host: '127.0.0.1',
  //   clientId: 'your_client_id'
  // }).then(function(client) {

  //   client.on('closed', function() {
  //     console.log('mqtt.event.closed');
  //   });

  //   client.on('error', function(msg) {
  //     console.log('mqtt.event.error', msg);
  //   });

  //   client.on('message', function(msg) {
  //     console.log('mqtt.event.message', msg);
  //   });

  //   client.on('connect', function() {
  //     console.log('connected');
  //     client.subscribe('data', 0);
  //     //client.publish('data', "test", 0, false);
  //   });

  //   client.connect();
  // }).catch(function(err){
  //   console.log(err);
  // });

  return (<graphScreen />);
}



