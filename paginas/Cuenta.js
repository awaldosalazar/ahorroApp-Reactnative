import React, {Component} from 'react';
import {View,Button,TextInput,Text,StyleSheet,Dimensions,TouchableOpacity,Image,ImageBackground,Alert,} from 'react-native';
import Dialog from "react-native-dialog";

import { createStackNavigator, createAppContainer } from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather'
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

import fondo from './images/fondohome.jpg';
import logo from './images/logolg.png';

const { width : WIDTH} = Dimensions.get('window')

const util = require('util');

class Cuenta extends React.Component{
  static navigationOptions={
    title:"ADMINISTRADOR DE CUENTA",
    headerStyle:{
      backgroundColor:'#73C6B6',
    },
  }
  state = {
    correo:'',
    contra:'',
    nuevacontra:'a',
    repitcontra:'b',
  }
  codigomodifica=(inputText)=>{
    this.setState({contra:inputText});
  }
  codnuevacontra=(inputText)=>{
    this.setState({nuevacontra:inputText});
  }
  codrepitcontra=(inputText)=>{
    this.setState({repitcontra:inputText});
  }

  constructor () {
    super()
    this.state = {
      showPass: true,
      press: false
    }
  }
 
  validar = () => {
    this.hideMenu();
  }

  consulta2 = () => {
    if(this.state.nuevacontra == this.state.repitcontra){
      var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
         if(xhttp.responseText == "4"){
        Alert.alert(
         "Error",
         "Esa contraseña es la que usas actualmente en esta cuenta",
         [
           {text: 'ok'},
         ],
         {cancelable: false}
       );
      }
      if(xhttp.responseText == "3"){
        Alert.alert(
         "Error",
         "No ingreso la contraseña correcta de su cuenta",
         [
           {text: 'ok'},
         ],
         {cancelable: false}
       );
      }
       if(xhttp.responseText == "21"){
       Alert.alert(
         "Exito",
         "Se actualizo la contraseña de su cuenta exitosamente",
         [
           this.setState({ dialogVisible: false }),
           {text: 'ok', onPress: ()=>  this.props.navigation.navigate("Sesion")},
         ],
         {cancelable: false}
       );
      }
      
      }
    }.bind(this)
     xhttp.open('GET',"https://proyectoscontrol.000webhostapp.com/updatecontraseña.php?contrasena="+this.state.contra+"&nueva="+this.state.nuevacontra+"&correo="+this.state.correo, true);
     xhttp.send()
    }else{
      alert("La contraseña no coincide");
    }
  }

  consulta = () => {
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
         if(xhttp.responseText == "3")
        Alert.alert(
         "Error",
         "No coincide la contraseña con tu cuenta, vuelve a intentarlo",
         [
           {text: 'ok'},
         ],
         {cancelable: false}
       );
       if(xhttp.responseText == "2")
       Alert.alert(
         "Coincidencia",
         "Cuenta verificada",
         [
           this.setState({ dialogContra: false }),
           {text: 'ok', onPress: ()=> this.bajacuenta()},
         ],
         {cancelable: false}
       );

       
      }
    }.bind(this)
     xhttp.open('GET',"https://proyectoscontrol.000webhostapp.com/verificacontraseña.php?contrasena="+this.state.contra+"&correo="+this.state.correo, true);
     xhttp.send()
  }

  bajacuenta = () =>{
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        if(xhttp.responseText == "1")
        Alert.alert(
         "Mensaje",
         "Lamentamos su partida, lo esperamos de vuelta :)",
         [
           {text: 'ok', onPress: ()=>  this.props.navigation.navigate("Sesion")},
         ],
         {cancelable: false}
       );
       if(xhttp.responseText == "2")
       alert('No se encontro su Registro, mande un ticket');
       if(xhttp.responseText == "3")
       alert('Hubo un erro, vulevelo a intentar mas tarde');
      }
    }.bind(this)
     xhttp.open('GET',"https://proyectoscontrol.000webhostapp.com/bajacliente.php?correo="+this.state.correo, true);
     xhttp.send()
  }



  helpclient = () => {
     var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        if(xhttp.responseText == "1")
        Alert.alert(
         "Mensaje",
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

  //VerContra
  showDialog = () => {
    this.setState({ dialogVisible: true });
  };
 
  handleCancel = () => {
    this.setState({ dialogVisible: false});
  };
 
  handleDelete = () => {
    this.setState({ dialogVisible: false });
  };

  showDialog2 = () => {
    this.setState({ dialogContra: true });
  };
 
  handleCancel2 = () => {
    this.setState({ dialogContra: false});
  };
 
  handleDelete2 = () => {
    this.setState({ dialogContra: false});
  };
  showPass = () =>{
    if (this.state.press == false){
      this.setState({showPass:false, press:true})
    }else{
      this.setState({showPass:true, press:false})
    }
  }
  //verContra

  componentDidMount = () =>{
       var { params } = this.props.navigation.state;
       const array = params.cuenta.name.split(',');

       this.setState({
         correo:array[3],
       })
  }
  render(){
    console.log('this.props.navigation.state = ' +util.inspect(this.props.navigation.state, false, null));
    var { params } = this.props.navigation.state;
    const array = params.cuenta.name.split(',');
    return(
      <ImageBackground source={fondo} style={styles.backgroundcontainer}>
      <View style={styles.logocontainer}>
      <Text style={styles.logotext}>DATOS PERSONALES</Text>

      </View>

      <View style={styles.logocontainer}>
          <Icon name='user' size={28}
  color='rgba(255,255,255,0.7)' style={styles.inputicon} />
          <TextInput
          style = {styles.input}
            placeholder = {array[1]}
            editable={false}
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
            placeholder = {array[2]}
            editable={false}
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
            placeholder = {array[3]}
            editable={false}
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
            placeholder = {array[4]}
            editable={false}
            onChangeText={this.cambianumero}
            maxLength={10}
            keyboardType = "numeric"
            placeholderTextColor = {'rgba{255,255,255,0.7}'}
            underlineColorAndroid = 'transparent'
           />

           <Dialog.Container visible={this.state.dialogVisible}>
          <Dialog.Title>Eliminacion de la cuenta</Dialog.Title>
          <Dialog.Description>
            Para poder efectuar la eliminacion total de su cuenta es necesario verificar su contraseña
          </Dialog.Description>
          <Dialog.Input placeholder='Contraseña' onChangeText={this.codigomodifica}/>
          <Dialog.Button label="Cancelar" onPress={this.handleCancel} />
          <Dialog.Button label="Buscar" onPress={this.consulta} />
        </Dialog.Container>

        <Dialog.Container visible={this.state.dialogContra}>
          <Dialog.Title>Cambio de contraseña</Dialog.Title>
          <Dialog.Description>
            1-.Escribe tu contraseña actual
            2-.Escriba la nueva Contraseña            
            3_.Repite la Contraseña
          </Dialog.Description>
          <Dialog.Input placeholder='Contraseña' secureTextEntry = {this.state.showPass} onChangeText={this.codigomodifica}/>
          <Dialog.Input placeholder='Nueva Contraseña' secureTextEntry = {this.state.showPass} onChangeText={this.codnuevacontra}/>
          <Dialog.Input placeholder='Repita la Contraseña' secureTextEntry = {this.state.showPass} onChangeText={this.codrepitcontra}/>
          <Dialog.Button label="Ver Contraseñas" onPress={this.showPass} />
          <Dialog.Button label="Cancelar" onPress={this.handleCancel2} />
          <Dialog.Button label="Cambiar" onPress={this.consulta2} />
        </Dialog.Container>

    </View>


      <TouchableOpacity style={styles.btrgst} onPress = {this.showDialog2}>
          <Icon  name='lock' size={30} color='rgba(255,255,255,0.7)' style={styles.inputicon}
          />          
          <Text style={styles.text}>CAMBIO DE CONTRA</Text>
      </TouchableOpacity>

    <TouchableOpacity style={styles.btrgst} onPress = {this.showDialog}>
          <Icon  name='user-x' size={30} color='rgba(255,255,255,0.7)' style={styles.inputicon}
          />          
          <Text style={styles.text}>ELIMINAR CUENTA</Text>
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
export default Cuenta;