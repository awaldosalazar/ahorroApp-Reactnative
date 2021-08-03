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
  Linking,
} from 'react-native';
import { Avatar, Card, Button, Title, Paragraph } from 'react-native-paper';

import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Constants from 'expo-constants';

import Icon from 'react-native-vector-icons/Feather';

import fondohome from './images/fondohome.jpg';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { width: WIDTH } = Dimensions.get('window');

const util = require('util');

//Icons cards
const LeftContent = props => <Avatar.Icon {...props} icon="eye" />;
const AdminCount = props => <Avatar.Icon {...props} icon="eye" />;
const Book = props => <Avatar.Icon {...props} icon="book" />;
const MapCard = props => <Avatar.Icon {...props} icon="map" />;
const AhorroCard = props => <Avatar.Icon {...props} icon="cash" />;

var datosuser;
var id;
class Datos extends React.Component {
static navigationOptions={
    title:"Datos",
    headerStyle:{
      backgroundColor:'#73C6B6',
    },    
  }
 render() {


    return (
      <ScrollView>
        <ImageBackground source={fondohome} style={styles.backgroundcontainer}>
          <View style={styles.logocontainer}>
                
            <Card
              style={{
                width: 300,
                maxHeight: 300,
                backgroundColor: 'white',
                marginTop: 10,
                borderRadius: 10,
              }}>
              <Card.Title
                title="Información"
                subtitle="Con que fue desarrollada"
                left={Book}
              />
              <MenuDivider />
              <Text style={styles.completext}>Lenguaje: JavaScript</Text>
              <Text style={styles.completext}>Framework: React Native</Text>
              <Text style={styles.completext}>SDK Version: v37.0.0</Text>
              <Text style={styles.completext}>Sitio de desarrollo: Expo.io</Text>
              <Text style={styles.completext}>Host: 000Webhost.com</Text>
              <Text style={styles.completext}>Base de datos: SQL</Text>
              <Text style={styles.completext}>Backend: PHP</Text>
            </Card>

            <Card
              style={{
                width: 300,
                maxHeight: 300,
                backgroundColor: 'white',
                marginTop: 10,
                borderRadius: 10,
              }}>
              <Card.Title
                title="Project Manager"
                subtitle="Datos Personales"
                left={Book}
              />
              <MenuDivider />
              <Text style={styles.completext}>Nombre: Ing. Alejandro Waldo S.</Text>
              <Text style={styles.completext}>Carrera: INNI</Text>
              <Text style={styles.completext}>CODIGO: 214597832</Text>
              <Text style={styles.completext}>SECCION: D08</Text>
              <Text style={styles.completext}>Profesor: Jimenez Rodriguez Mario</Text>
              <Text style={styles.completext} onPress={() => Linking.openURL('https://snack.expo.io/@awaldo/ahorross')}>Snack: Press me</Text>
            </Card>

            <Card
              style={{
                width: 300,
                maxHeight: 300,
                backgroundColor: 'white',
                marginTop: 10,
                borderRadius: 10,
              }}>
              <Card.Title
                title="Misión"
                subtitle="La misión que tiene la empresa"
                left={Book}
              />
              <MenuDivider />
              <Text style={styles.completext}>Somos una empresa que quiere llegar ayudar a la cartera de todos los clientes de una manera optima y que le saquen el mayor aprovechamiento de la app</Text>
            </Card>


            <Card
              style={{
                width: 300,
                maxHeight: 300,
                backgroundColor: 'white',
                marginTop: 10,
                borderRadius: 10,
              }}>
              <Card.Title
                title="Visión"
                subtitle="Como nos gustaria vernos"
                left={Book}
              />
              <MenuDivider />
              <Text style={styles.completext}>Nuestra empresa quiere verse reflejada en muchos celulares, por ende se espera que en unos 5 años estemos en mas de 2000 celulares</Text>
            </Card>

          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  backgroundcontainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logocontainer: {
    alignItems: 'center',
    marginBotton: 50,
    marginTop: 29,
  },
  completext: {
    color: 'black',
    fontFamily: 'sans-serif',
    fontSize: 17,
    fontWeight: '500',
    marginLeft: 10,
    marginRight: 15,
    textAlign: 'justify',
    marginTop:5,
  },
});
export default Datos;