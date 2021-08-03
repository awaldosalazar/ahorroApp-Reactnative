import React, {Component} from 'react';
import {View,Button,TextInput,Text,StyleSheet,Dimensions,TouchableOpacity,Image,ImageBackground} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather'

import fondo from './images/fondologin.jpg';
import logo from './images/logolg.png';

const { width : WIDTH} = Dimensions.get('window')

class Sesion extends React.Component{
  
  static navigationOptions={
    title:"INICIO DE SESION 2.0",
    headerStyle:{
      backgroundColor:'#73C6B6',
    },    
  }

  state={
    contrasena:'a',
    correo:'a'
  }

  cambiacontrasena=(inputText)=>{
    this.setState({contrasena:inputText});
  }
  cambiacorreo=(inputText)=>{
    this.setState({correo:inputText});
  }

  constructor () {
    super()
    this.state = {
      showPass: true,
      press: false
    }
  }
  showPass = () =>{
    if (this.state.press == false){
      this.setState({showPass:false, press:true})
    }else{
      this.setState({showPass:true, press:false})
    }
  }

  validar = () => {
     var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        //this.setState({result: JSON.parse(xhttp.responseText)})
        if(xhttp.responseText == "1")
        this.props.navigation.navigate("Validacion");
      }else if(xhttp.responseText == "3"){
        alert("verifica tu usuario o registrate");
      }else if(xhttp.responseText[0] == "2"){
        this.props.navigation.navigate("Home",{ name: xhttp.responseText});
      }
    }.bind(this)
     xhttp.open('GET','https://proyectoscontrol.000webhostapp.com/sesion.php?contrasena='+this.state.contrasena+"&correo="+this.state.correo, true);
     xhttp.send()
     //this.props.navigation.navigate('Home');
  }
  registrarse = () => {
    this.props.navigation.navigate('Registro');
  }
  render(){
    return(
      <ImageBackground source={fondo} style={styles.backgroundcontainer}>
      <View style={styles.logocontainer}>
      <Image source={logo} style={styles.logo}/>
      <Text style={styles.logotext}>GANANCIAS</Text>
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
          <Icon name='lock' size={28}
  color='rgba(255,255,255,0.7)' style={styles.inputicon} />
          <TextInput
          style = {styles.input}
            placeholder = 'CONTRASEÑA'
            secureTextEntry = {this.state.showPass}
            onChangeText={this.cambiacontrasena}
            placeholderTextColor = {'rgba{255,255,255,0.7}'}
            underlineColorAndroid = 'transparent'
           />

        <TouchableOpacity style={styles.btneye} onPress={this.showPass.bind(this)}>
          <Icon name={this.state.press == false ? 'eye-off' : 'eye'} size={30}
  color='rgba(255,255,255,0.7)'/>
        </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.btlogin} onPress = {this.validar}>
          <Icon name='user-check'  size={30} color='rgba(255,255,255,0.7)' style={styles.inputicon} />
          <Text style={styles.text}>Ingresar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btrgst} onPress = {this.registrarse}>
          <Icon  name='user-plus' size={30} color='rgba(255,255,255,0.7)' style={styles.inputicon}
          />
          <Text style={styles.text}>Registrarse</Text>
      </TouchableOpacity>
      <Text style={{color:'white',marginLeft:-100,marginTop:10}}>Quieres saber mas de</Text>
      <Text style={{color:'white',marginTop:-25,marginLeft:130,textDecorationLine: 'underline',fontWeight: 'bold',fontSize:20}} 
      onPress={() => this.props.navigation.navigate("Datos")}>
      nosotros</Text>
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
    backgroundColor: '#F5FCFF'
  }, 
  logocontainer:{
    alignItems: 'center',
    marginBotton: 50
  },
  logotext:{
    color:'white',
    fontSize: 20,
    fontWeight:'500',
    marginTop:10,
    opacity: 0.4 
  },
  logo:{
    width: 150,
    height: 150,
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
  btneye: {
    position: 'absolute',
    top: 6,
    right: 37
  },
  btlogin: { 
    width:WIDTH -55,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#14D69B',
    justifyContent: 'center',
    marginTop: 20,
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
export default Sesion;