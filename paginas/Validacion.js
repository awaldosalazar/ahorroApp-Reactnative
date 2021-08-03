import React, {Component} from 'react';
import {View,Button,TextInput,Text,StyleSheet,Dimensions,TouchableOpacity,Image,ImageBackground,Alert} from 'react-native';


import { createStackNavigator, createAppContainer } from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather'


import fondo from './images/fondohome.jpg';
import logo from './images/logolg.png';

const { width : WIDTH} = Dimensions.get('window')

class Validacion extends React.Component{
  static navigationOptions={
    title:"Validar tu cuenta",
    headerStyle:{
      backgroundColor:'#73C6B6',
    },
  }
  state = {
    correo:'',
    codigo:'',
  }

  cambiacorreo=(inputText)=>{
    this.setState({correo:inputText});
  }
  cambiacodigo=(inputText)=>{
    this.setState({codigo:inputText});
  }

validar = () => {
  var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        //this.setState({result: JSON.parse(xhttp.responseText)})
        if(xhttp.responseText == "1"){
        Alert.alert(
         "Mensaje ",
         "Felicidades tu cuenta ha sido activada correctamente",
         [
           {text: 'ok', onPress: ()=> this.props.navigation.navigate("Sesion")},
         ],
         {cancelable: false}
       );
        }else if(xhttp.responseText == "2"){
          alert("Verifica tus datos");
        }else if(xhttp.responseText == "3"){
          alert("Error en el servidor intenta mas tarde o contacta a al soporte");
        }
      }
    }.bind(this)
     xhttp.open('GET',"https://proyectoscontrol.000webhostapp.com/validar.php?correo="+this.state.correo+"&codigo="+this.state.codigo, true);
     xhttp.send()
}

  home = () => {
    this.props.navigation.navigate('Sesion');
  }
  registrarse = () => {
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       if(xhttp.responseText=='1'){
         this.hideMenu();
       Alert.alert(
         "Mensaje ",
         "Revisa tu correo, ya que por ese medio se mando \n tu codigo de verificacion",
         [
           {text: 'ok'},
         ],
         {cancelable: false}
       );
       }
    }
};
xhttp.open("GET", "http://proyectoscontrol.000webhostapp.com/alta.php?nombre="+this.state.nombre+"&apellidos="+this.state.apellidos+"&correo="+this.state.correo+"&numero="+this.state.numero+"&contrasena="+this.state.contrasena, true);
xhttp.send();
  }
 
  render(){
    return(
      <ImageBackground source={fondo} style={styles.backgroundcontainer}>
      <View style={styles.logocontainer}>
      <Text style={styles.logotext}>CODIGO DE VALIDACION</Text>
      </View>

      <View style={styles.logocontainer}>
          <Icon name='at-sign' size={28}
  color='rgba(255,255,255,0.7)' style={styles.inputicon} />
          <TextInput
          style = {styles.input}
            placeholder = 'CORREO'
            keyboardType = "email-address"
            onChangeText={this.cambiacorreo}
            placeholderTextColor = {'rgba{255,255,255,0.7}'}
            underlineColorAndroid = 'transparent'
           />
      </View>

      <View style={styles.inputcontainer}>
          <Icon name='check-circle' size={28}
  color='rgba(255,255,255,0.7)' style={styles.inputicon} />
          <TextInput
          style = {styles.input}
            placeholder = 'CODIGO DE VALIDACION'
            onChangeText={this.cambiacodigo}
            maxLength={6}
            placeholderTextColor = {'rgba{255,255,255,0.7}'}
            underlineColorAndroid = 'transparent'
           />
      </View>
    

      <TouchableOpacity style={styles.btrgst} onPress = {this.validar}>
          <Icon  name='user-plus' size={30} color='rgba(255,255,255,0.7)' style={styles.inputicon}
          />
          <Text style={styles.text}>VALIDAR</Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.btrgst} onPress = {this.home}>
          <Icon  name='home' size={30} color='rgba(255,255,255,0.7)' style={styles.inputicon}
          />
          <Text style={styles.text}>En otro momento</Text>
      </TouchableOpacity>
    
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
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }, 
  logocontainer:{
    alignItems: 'center',
    marginBotton: 40,
    marginTop:-20
  },
  logotext:{
    color:'white',
    fontSize: 30,
    fontWeight:'500',
    opacity: 0.4,
    marginTop:-60 
  },
  input:{
    width:WIDTH -55,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(255,255,255,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25,
  },
  inputcontainer:{
    marginTop: 10,
  },
  inputicon:{
    position: 'absolute',
    top: 9,
    left: 37
  },
  btrgst: { 
    width:WIDTH -55,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#008B8D',
    justifyContent: 'center',
    marginTop: 10,
  },
  text: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16, 
    textAlign: 'center',
  },
})
export default Validacion;