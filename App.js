import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableWithoutFeedback, ActivityIndicator, Platform } from 'react-native';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import { Icon } from 'react-native-elements';
import {MQTT }from 'sp-react-native-mqtt';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import GraphScreen from './app/screens/GraphScreen';
import MQTTConnection from './app/config/MQTTCOnnection';
//import { Client, Message } from 'react-native-paho-mqtt';
//import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default function App() {
  
  const client = new Paho.MQTT.Client('localhost', 9001, 'uname');
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  client.connect({ onSuccess:onConnect, useSSL: true });

  return <GraphScreen />;
}



