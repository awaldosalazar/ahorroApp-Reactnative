import React, {Component} from 'react';
import {View,Button,TextInput,Text,StyleSheet,Dimensions,TouchableOpacity,Image,ImageBackground} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather'

import fondo from './images/fondologin.jpg';
import logo from './images/logolg.png';

const { width : WIDTH} = Dimensions.get('window')

class Splash extends React.Component{

  render(){
    return(
      <ImageBackground source={fondo} style={styles.backgroundcontainer}>
      <View style={styles.logocontainer}>
      <Image source={logo} style={styles.logo}/>
      <Text style={styles.logotext}>LA APP DEL AHORRO</Text>
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
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }, 
  logocontainer:{
    alignItems: 'center',
    marginBotton: 50
  },
  logotext:{
    color:'white',
    fontSize: 30,
    fontWeight:'500',
    marginTop:50,
    opacity: 0.7 
  },
  logo:{
    width: 150,
    height: 150,
  },
})
export default Splash;