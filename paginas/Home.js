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
const AdminCount = props => <Avatar.Icon {...props} icon="home" />;
const PdfCard = props => <Avatar.Icon {...props} icon="book" />;
const MapCard = props => <Avatar.Icon {...props} icon="map" />;
const AhorroCard = props => <Avatar.Icon {...props} icon="cash" />;

var datosuser;
var id;
class Home extends React.Component {
  state = {
    nombre: '',
    codigo: '',
    carrera: '',
  };

  //menu
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };
  //menu
  openpdf = () => {
    this.props.navigation.navigate('Pdfview');
  };
  exit = () => {
    this.props.navigation.navigate('Sesion');
  };
  openmap = () => {
    this.props.navigation.navigate('Map');
  };
  cuenta = () => {
    this.props.navigation.navigate('Cuenta', { cuenta: datosuser });
  };
  gasto = () => {
    this.props.navigation.navigate('Gasto', { cuenta: datosuser });
  };
  detalle = () => {
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        //this.setState({result: JSON.parse(xhttp.responseText)})
       this.props.navigation.navigate("DetallesGastos",{ cuenta: xhttp.responseText});
    }}.bind(this)
     xhttp.open('GET','https://proyectoscontrol.000webhostapp.com/consultageneralgastos.php?correo='+id, true);
     xhttp.send()

  }
  consultaGastos = () => {
    alert("hola");
  };

  render() {
    console.log('this.props.navigation.state = ' +util.inspect(this.props.navigation.state, false, null));
    var { params } = this.props.navigation.state;
    datosuser = params;
    const array = params.name.split(',');
    id = array[3];

    return (
      <ScrollView>
        <ImageBackground source={fondohome} style={styles.backgroundcontainer}>
          <View style={styles.logocontainer}>
            <Card.Content>
              <Title> La App Del Ahorro</Title>
              <Icon
                name="user"
                size={30}
                color="#009172"
                style={{ top: 5, left: 10 }}
              />
              <Text
                style={{
                  paddingLeft: 45,
                  top: -25,
                  color: '#009172',
                  justifyContent: 'center',
                  fontSize: 20,
                  fontWeight: '500',
                  marginTop: 5,
                  opacity: 0.9,
                  fontFamily: 'Comic Sans',
                }}>
                Bienvenid@:[*{array[1].toUpperCase()}*]
              </Text>
            </Card.Content>

            

            <Card
              style={{
                width: 300,
                maxHeight: 150,
                backgroundColor: 'white',
                marginTop: 10,
                borderRadius: 10,
              }}>
              <Card.Title
                title="Cuenta"
                subtitle="Administración de cuenta"
                left={AdminCount}
              />
              <MenuDivider />
              <Button
                icon="login"
                mode="text"
                style={{ borderRadius: 10 }}
                onPress={this.cuenta}>
                Administrar Cuenta
              </Button>
            </Card>

            <Card
              style={{
                width: 300,
                maxHeight: 150,
                backgroundColor: 'white',
                marginTop: 10,
                borderRadius: 10,
              }}>
              <Card.Title
                title="Alta De Gasto"
                subtitle="Aqui puedes ir dando de alta los gastos de tu día"
                left={AhorroCard}
              />
              
              <MenuDivider />
              <Button
                icon="login"
                mode="text"
                style={{ borderRadius: 10 }}
                onPress={this.gasto}>
                Agregar Gasto
              </Button>
            </Card>

            <Card
              style={{
                width: 300,
                maxHeight: 150,
                backgroundColor: 'white',
                marginTop: 10,
                borderRadius: 10,
              }}>
              <Card.Title
                title="Detalles de gastos"
                subtitle="Aqui puedes ver desglozado por mes tus gastos"
                left={AhorroCard}
              />
              
              <MenuDivider />
              <Button
                icon="login"
                mode="text"
                style={{ borderRadius: 10 }}
                onPress={this.detalle}>
                Agregar Gasto
              </Button>
            </Card>

            <Card
              style={{
                width: 300,
                maxHeight: 150,
                backgroundColor: 'white',
                marginTop: 10,
                borderRadius: 10,
              }}>
              <Card.Title
                title="Ubicación"
                subtitle="Ubicación Vía Maps"
                left={MapCard}
              />
              <MenuDivider />
              <Button
                icon="map"
                mode="text"
                style={{ borderRadius: 10 }}
                onPress={this.openmap}>
                Ver Ubicación
              </Button>
            </Card>

            <Card
              style={{
                width: 300,
                maxHeight: 150,
                backgroundColor: 'white',
                marginTop: 10,
                borderRadius: 10,
              }}>
              <Card.Title
                title="Documentación PDF"
                subtitle="Conoce más sobre nosotros"
                left={PdfCard}
              />
              <MenuDivider />
              <Button
                icon="book-open"
                mode="text"
                style={{ borderRadius: 10 }}
                onPress={this.openpdf}>
                Ver PDF
              </Button>
            </Card>

            <Button icon="logout" color={'#f08e25'} onPress={this.exit}>
              Cerrar Sesión
            </Button>
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
});
export default Home;
