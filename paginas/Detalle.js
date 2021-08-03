import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Picker,
} from 'react-native';
import { Avatar, Card, Button, Title, Paragraph } from 'react-native-paper';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Constants from 'expo-constants';
import { Table, Row, Rows } from 'react-native-table-component';

import Icon from 'react-native-vector-icons/Feather';

import fondohome from './images/fondohome.jpg';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { width : WIDTH} = Dimensions.get('window');
const util = require('util');
const AdminCount = props => <Avatar.Icon {...props} icon="cash" />;
class Detalle extends React.Component {  
  static navigationOptions={
    title:"Detalles de los gastos",
    headerStyle:{
      backgroundColor:'#73C6B6',
    },    
  }
  state={
    tableHead:[],
    tableData:''
  }

  
  render() {
      console.log('this.props.navigation.state = ' +util.inspect(this.props.navigation.state, false, null));
    var { params } = this.props.navigation.state;
    const array = params.cuenta.split(',');


    return (
        <ImageBackground source={fondohome} style={styles.backgroundcontainer}>
        <View style={styles.logocontainer}>
          <Card
              style={{
                width: 300,
                maxHeight: 500,
                backgroundColor: 'white',
                marginTop: 10,
                borderRadius: 10,
              }}>
              <Card.Title
                title="DETALLES"
                subtitle="GASTOS POR SEMANA"
                left={AdminCount}
              />
              <MenuDivider />
              <Text style={styles.muestra}>Semana: {array[0]} </Text>
              <Text style={styles.muestra}>Total Gastado: {array[2]} </Text>
              <MenuDivider />
              <Card.Title
                title="ATRIBUTO"
                subtitle="SUMA POR ATRIBUTO"
              />
              <MenuDivider />
              <Text style={styles.muestra}>Total De Gastos: {array[1]}</Text>
              <Text style={styles.muestra}>Efectivo: {array[3]} </Text>
              <Text style={styles.muestra}>Tarjeta: {array[1] - array[3]} </Text>
              <Text style={styles.muestra}>Necesarios: {array[4]}</Text>
              <Text style={styles.muestra}>Innecesario: {array[1] - array[4]} </Text>
            </Card>
          </View>
        </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
    backgroundcontainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }, 
  logocontainer: {
    alignItems: 'center',
    marginBotton: 50,
    marginTop: 29,
  },
  muestra: {
    marginLeft:15,
    marginTop:5,
  },
});
export default Detalle;
