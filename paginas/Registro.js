import React, {Component} from 'react';
import {View,Button,TextInput,Text,StyleSheet,Dimensions,TouchableOpacity,Image,ImageBackground,Alert} from 'react-native';


import { createStackNavigator, createAppContainer } from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

import fondo from './images/fondohome.jpg';
import logo from './images/logolg.png';

const { width : WIDTH} = Dimensions.get('window')

class Registro extends React.Component{
  static navigationOptions={
    title:"Registro",
    headerStyle:{
      backgroundColor:'#73C6B6',
    },
  }
  state = {
    nombre:'',
    apellidos:'',
    correo:'',
    numero:'',
    contrasena:'',
    nombrepet:'',
    correopet:'',
    problemapet:''
  }
  cambianombre=(inputText)=>{
    this.setState({nombre:inputText});
  }
  cambiaapellidos=(inputText)=>{
    this.setState({apellidos:inputText});
  }
  cambiacorreo=(inputText)=>{
    this.setState({correo:inputText});
  }
  cambianumero=(inputText)=>{
    this.setState({numero:inputText});
  }
  cambiacontrasena=(inputText)=>{
    this.setState({contrasena:inputText});
  }
  nombrepetcambia=(inputText)=>{
    this.setState({nombrepet:inputText});
  }
  correopetcambia=(inputText)=>{
    this.setState({correopet:inputText});
  }
  comentariocambia=(inputText)=>{
    this.setState({problemapet:inputText});
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
    //this.props.navigation.navigate('Sesion');
    this.hideMenu();
  }

  helpclient = () => {
     var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        //this.setState({result: JSON.parse(xhttp.responseText)})
        if(xhttp.responseText == "1")
        Alert.alert(
         "Mensaje ",
         "Se ha enviado correo al Administrador, espera respuesta en tu correo\ngracias por tu preferencia.",
         [
           {text: 'ok', onPress: ()=> this.hideMenu},
         ],
         {cancelable: false}
       );
      }
    }.bind(this)
     xhttp.open('GET',"https://proyectoscontrol.000webhostapp.com/helpcliente.php?nombre="+this.state.nombrepet+"&correo="+this.state.correopet+"&problema="+this.state.problemapet, true);
     xhttp.send()
  }

  registrar = () => {
     var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        //this.setState({result: JSON.parse(xhttp.responseText)})
        if(xhttp.responseText == "1")
        Alert.alert(
         "Mensaje ",
         "Revisa tu correo, ya que por ese medio se mando \n tu codigo de verificacion",
         [
           {text: 'ok', onPress: ()=> this.props.navigation.navigate("Validacion")},
         ],
         {cancelable: false}
       );
      }
    }.bind(this)
     xhttp.open('GET',"http://proyectoscontrol.000webhostapp.com/alta.php?nombre="+this.state.nombre+"&apellidos="+this.state.apellidos+"&correo="+this.state.correo+"&numero="+this.state.numero+"&contrasena="+this.state.contrasena, true);
     xhttp.send()
  }

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
  render(){
    return(
      <ImageBackground source={fondo} style={styles.backgroundcontainer}>
      <View style={styles.logocontainer}>
      <Text style={styles.logotext}>REGISTRO</Text>
      </View>

      <View style={styles.logocontainer}>
          <Icon name='user' size={28}
  color='rgba(255,255,255,0.7)' style={styles.inputicon} />
          <TextInput
          style = {styles.input}
            placeholder = 'NOMBRE'
            onChangeText={this.cambianombre}
            placeholderTextColor = {'rgba{255,255,255,0.7}'}
            underlineColorAndroid = 'transparent'
           />
      </View>
    

      <View style={styles.inputcontainer}>
          <Icon name='user' size={28}
  color='rgba(255,255,255,0.7)' style={styles.inputicon} />
          <TextInput
          style = {styles.input}
            placeholder = 'APELLIDOS'
            onChangeText={this.cambiaapellidos}
            placeholderTextColor = {'rgba{255,255,255,0.7}'}
            underlineColorAndroid = 'transparent'
           />
    </View>

      <View style={styles.inputcontainer}>
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
          <Icon name='phone' size={28}
  color='rgba(255,255,255,0.7)' style={styles.inputicon} />
          <TextInput
          style = {styles.input}
            placeholder = 'NUMERO'
            onChangeText={this.cambianumero}
            maxLength={10}
            keyboardType = "numeric"
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
            onChangeText={this.cambiacontrasena}
            secureTextEntry = {this.state.showPass}
            placeholderTextColor = {'rgba{255,255,255,0.7}'}
            underlineColorAndroid = 'transparent'
           />

        <TouchableOpacity style={styles.btneye} onPress={this.showPass.bind(this)}>
          <Icon name={this.state.press == false ? 'eye-off' : 'eye'} size={30}
  color='rgba(255,255,255,0.7)'/>
        </TouchableOpacity>
    </View>

      <TouchableOpacity style={styles.btrgst} onPress = {this.registrar}>
          <Icon  name='user-plus' size={30} color='rgba(255,255,255,0.7)' style={styles.inputicon}
          />
          <Text style={styles.text}>Registrarse</Text>
      </TouchableOpacity>
    
      <Menu
              style={{width:250,backgroundColor:'white',opacity:0.4,marginHorizontal:80,marginTop:38,borderRadius:30}}
              ref={this.setMenuRef}
              button={
                <TouchableOpacity onPress={this.showMenu}>
                  <Icon name="edit" size={18} color="white" style={{marginTop:20}}>
                  AYUDA?
                  </Icon>
                </TouchableOpacity>
              }>
              <TextInput
                placeholder="Nombre"
                placeholderTextColor={'black'}
                onChangeText={this.nombrepetcambia}
                style={{ textAlign: 'center', color: 'green' }}
              />
              <MenuDivider/>
              <TextInput
                placeholder="Correo"
                placeholderTextColor={'black'}
                keyboardType = "email-address"
                onChangeText={this.correopetcambia}
                style={{
                  textAlign: 'center',
                  color: 'green'
                }}
              />
              <MenuDivider />
              <TextInput
                placeholder="Consulta/Problema "
                onChangeText={this.comentariocambia}
                placeholderTextColor={'black'}
                style={{ textAlign: 'center',color: 'green' }}
              />
              <MenuDivider />
              <MenuItem
                style={{ alignItems: 'center',placeholderTextColor:'white' }}
                onPress={this.helpclient}>
                Enviar
              </MenuItem>
            </Menu>
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
  btneye: {
    position: 'absolute',
    top: 6,
    right: 37
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
export default Registro;