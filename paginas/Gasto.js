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
  Alert,
} from 'react-native';
import { CheckBox } from 'react-native-elements'
import { Avatar, Card, Button, Title, Paragraph } from 'react-native-paper';

import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Constants from 'expo-constants';

import Icon from 'react-native-vector-icons/Feather';

import fondohome from './images/fondohome.jpg';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { width : WIDTH} = Dimensions.get('window');

class Gasto extends React.Component {  
  static navigationOptions={
    title:"ALTA DE GASTO",
    headerStyle:{
      backgroundColor:'#73C6B6',
    },    
  }
  state={
    id:'',
    one:true,
    two:false,
    three: true,
    four: false,
    five:true,
    six:false,
    tipo: 'unidad',
    tipopago:'efectivo',
    tipogasto:'necesario',
    concepto:'',
    cantidad:'',
    precio:'',
  }
  registrargasto = () => {
     //alert("id: "+this.state.id +" tipo: " + this.state.tipo + " tipopago: " + this.state.tipopago+" tipogasto: " + this.state.tipogasto + " concepto: " + this.state.concepto + " cantidad: "+this.state.cantidad + " precio: "+this.state.precio )
     var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        //this.setState({result: JSON.parse(xhttp.responseText)})
        if(xhttp.responseText == "1")
        Alert.alert(
         "Exito",
         "Se subio tu gasto",
         [
           {text: 'ok'}
         ],
         {cancelable: false}
       );
      }
    }.bind(this)
     xhttp.open('GET',"http://proyectoscontrol.000webhostapp.com/altagasto.php?correo="+this.state.id+"&concepto="+this.state.concepto+"&tipo="+this.state.tipo+"&cantidad="+this.state.cantidad+"&precio="+this.state.precio+"&tipopago="+this.state.tipopago+"&tipogasto="+this.state.tipogasto, true);
     xhttp.send()
  }
  cambiaconcepto=(inputText)=>{
    this.setState({concepto:inputText});
  }
  cambiacantidad=(inputText)=>{
    this.setState({cantidad:inputText});
  }
  cambiaprecio=(inputText)=>{
    this.setState({precio:inputText});
  }
  cambiaconcepto=(inputText)=>{
    this.setState({concepto:inputText});
  }
  onePressed() {
    this.setState({
      one: true,
      two: false,
      tipo: 'unidad',
    });
  }
  twoPressed() {
    this.setState({
      one: false,
      two: true,
      tipo:'litro',
    });
  }
  threePressed() {
    this.setState({
      three: true,
      four: false,
      tipopago: 'efectivo',
    });
  }
  fourPressed() {
    this.setState({
      three: false,
      four: true,
      tipopago: 'tarjeta',
    });
  }
  fivePressed() {
    this.setState({
      five: true,
      six: false,
      tipogasto: 'necesario',
    });
  }
  sixPressed() {
    this.setState({
      five: false,
      six: true,
      tipogasto: 'innecesario',
    });
  }
  componentDidMount = () =>{
       var { params } = this.props.navigation.state;
       const array = params.cuenta.name.split(',');

       this.setState({
         id:array[3],
       })
  }
  render() {

    return (
        <ImageBackground source={fondohome} style={styles.backgroundcontainer}>
        
          <View style={styles.logocontainer}>
              <Text style={styles.logotext}>ALTA DE AHORRO</Text>
          </View>

    <View style={styles.logocontainer}>
          <Icon name='user-check' size={28}
  color='rgba(255,255,255,0.7)' style={styles.inputicon} />
          <TextInput
          style = {styles.input}
            placeholder = 'ID'
            editable={false}
            value={this.state.id}
            placeholderTextColor = {'rgba{255,255,255,0.7}'}
            underlineColorAndroid = 'transparent'
           />
    </View>

    <View style={styles.inputcontainer}>
          <Icon name='tag' size={28}
  color='rgba(255,255,255,0.7)' style={styles.inputicon} />
          <TextInput
          style = {styles.input}
            placeholder = 'CONCEPTO'
            onChangeText={this.cambiaconcepto}
            placeholderTextColor = {'rgba{255,255,255,0.7}'}
            underlineColorAndroid = 'transparent'
           />
    </View>

    <View style={{marginTop:10,marginLeft:-140}}>
       <CheckBox            
            title='Unidad'
            checkedColor='green'
           checked={this.state.one}
           onPress={() => this.onePressed()}
        />
    </View>
    <View style={{marginTop:-56.5,marginLeft:80}}>
       <CheckBox            
            title='Litro'
            checkedColor='green'
           checked={this.state.two}
           onPress={() => this.twoPressed()}
        />
    </View>
  
        <View style={{marginTop:10,marginLeft:-160}}>
          <Icon name='dollar-sign' size={28}
  color='rgba(255,255,255,0.7)' style={styles.inputicon} />
          <TextInput
          style = {{
            width:WIDTH -210,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(255,255,255,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25,
    }}
            placeholder = 'CANTIDAD'
            keyboardType = "numeric"
            onChangeText={this.cambiacantidad}
            placeholderTextColor = {'rgba{255,255,255,0.7}'}
            underlineColorAndroid = 'transparent'
           />
    </View>

<View style={{marginTop:-45,marginLeft:150}}>
          <Icon name='dollar-sign' size={28}
  color='rgba(255,255,255,0.7)' style={styles.inputicon} />
          <TextInput
          style = {{width:WIDTH -210,
    height: 45,
    borderRadius: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(255,255,255,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25,}}
            placeholder = 'PRECIO'
            keyboardType = "numeric"
            onChangeText={this.cambiaprecio}
            placeholderTextColor = {'rgba{255,255,255,0.7}'}
            underlineColorAndroid = 'transparent'
           />
    </View>

        <View style={{marginTop:10,marginLeft:-140}}>
       <CheckBox            
            title='Efectivo'
            checkedColor='green'
           checked={this.state.three}
           onPress={() => this.threePressed()}
        />
    </View>
    <View style={{marginTop:-56.5,marginLeft:90}}>
       <CheckBox            
            title='Tarjeta'
            checkedColor='green'
           checked={this.state.four}
           onPress={() => this.fourPressed()}
        />
    </View>

            <View style={{marginTop:10,marginLeft:-160}}>
       <CheckBox            
            title='Necesario'
            checkedColor='green'
           checked={this.state.five}
           onPress={() => this.fivePressed()}
        />
    </View>
    <View style={{marginTop:-56.5,marginLeft:120}}>
       <CheckBox            
            title='Innecesario'
            checkedColor='green'
           checked={this.state.six}
           onPress={() => this.sixPressed()}
        />
    </View>

    <TouchableOpacity style={styles.btrgst} onPress = {this.registrargasto}>
          <Icon  name='user-plus' size={30} color='rgba(255,255,255,0.7)' style={styles.inputicon}
          />
          <Text style={styles.text}>Guardar Gasto</Text>
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
});
export default Gasto;
