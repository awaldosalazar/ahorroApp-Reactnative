import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Fontisto'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Sesion from './Sesion';
import Home from './Home';
import Registro from './Registro';
import Pdfview from './Pdfview';
import Splash from './Splash';
import Datos from './Datos';
import Map from './Map';
import Validacion from './Validacion';
import Cuenta from './Cuenta';
import Gasto from './Gasto';
import Detalle from './Detalle';
import DetallesGastos from './DetallesGastos';

const NavigationStack = createStackNavigator({
  Sesion:{
    screen:Sesion,
    navigationOptions:{
      header: null,
    },
  },
  Splash:{
    screen:Splash,
    navigationOptions:{
      header: null,
    },
  },
  Home:{
    screen:Home,
    navigationOptions:{
      header: null,
    },
  },
  Registro:{
    screen:Registro,
  },
  DetallesGastos:{
    screen:DetallesGastos,
  },
  Datos:{
    screen:Datos,
  },
  Map:{
    screen:Map,
  },
  Validacion:{
    screen:Validacion,
    navigationOptions:{
      header: null,
    },
  },
  Pdfview:{
    screen:Pdfview,
  },

  Cuenta:{
    screen:Cuenta,
  },
  Gasto:{
    screen:Gasto,
  },
  Detalle:{
    screen:Detalle,
  },
});

const Conteiner = createAppContainer(NavigationStack);
export default Conteiner;