import React from 'react';
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
import { Avatar, Card, Button, Title, Paragraph } from 'react-native-paper';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Constants from 'expo-constants';
import { Table, Row, Rows } from 'react-native-table-component';
import fondohome from './images/fondohome.jpg';
const util = require('util');
const AdminCount = props => <Avatar.Icon {...props} icon="cash" />;
var cad,
    correousuario,
  numRegistros,
  registros,
  length = 1000,
  flag = '0';
var registrosParaImprimir = [[]];
var registrosParaImprimir2 = [[]];

class DetallesGastos extends React.Component {
  static navigationOptions = {
    //Setting the header of the screen

    title: 'Detalle De Gastos',
    headerStyle:{
      backgroundColor:'#73C6B6',
    },  
  };

  state = {
    tableHead: ['ID', 'Concepto', 'Cantidad', 'Gastado', 'Fecha'],
    tableData: [[]],
    tableData2: [[]],
  };

  componentDidMount() {
    console.log('this.props.navigation.state = ' +util.inspect(this.props.navigation.state, false, null));
    var { params } = this.props.navigation.state;
    const array = params.cuenta.split(',');
    correousuario = array[5];
    this.mostrarsemanaactual();
    this.historial();
  }
   historial = () => {
    var regVacio=[[]];
    var that = this;
    registrosParaImprimir2=regVacio;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        if (xhttp.responseText == '0') {
          Alert.alert('ERROR', 'No existe ningun dato aun', [{ text: 'ok' }]);
        } else {
          cad = xhttp.responseText;
          var [numRegistros, registros] = cad.split('*');
          const todosRegistros = registros.split('|', numRegistros);
          //console.log(todosRegistros);
          const cantidadRegistros = todosRegistros.length;

          let position = 0;

          while (position < cantidadRegistros) {
            // Prepare text for specified length and increment position
            var unRegistro = todosRegistros[position].split(',', 5);

            position += 1;

            registrosParaImprimir2.push(unRegistro);
            
          }
          console.log(registrosParaImprimir);
          that.setState({ tableData2: registrosParaImprimir2 });
        }
      }
    };
    xhttp.open(
      'GET',
      'https://proyectoscontrol.000webhostapp.com/consultaall.php?correo='+correousuario,
      true
    );
    xhttp.send();
  };

  mostrarsemanaactual = () => {
    var regVacio=[[]];
    var that = this;
    registrosParaImprimir=regVacio;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        if (xhttp.responseText == '0') {
          Alert.alert('ERROR', 'No existe ningun dato aun', [{ text: 'ok' }]);
        } else {
          cad = xhttp.responseText;
          var [numRegistros, registros] = cad.split('*');
          const todosRegistros = registros.split('|', numRegistros);
          //console.log(todosRegistros);
          const cantidadRegistros = todosRegistros.length;

          let position = 0;

          while (position < cantidadRegistros) {
            // Prepare text for specified length and increment position
            var unRegistro = todosRegistros[position].split(',', 5);

            position += 1;

            registrosParaImprimir.push(unRegistro);
            
          }
          console.log(registrosParaImprimir);
          that.setState({ tableData: registrosParaImprimir });
        }
      }
    };
    xhttp.open(
      'GET',
      'https://proyectoscontrol.000webhostapp.com/Consultas.php?correo='+correousuario,
      true
    );
    xhttp.send();
  };

  render() {
    console.log('this.props.navigation.state = ' +util.inspect(this.props.navigation.state, false, null));
    var { params } = this.props.navigation.state;
    const array = params.cuenta.split(',');
    const state = this.state;
    if (flag == '0') {
      console.log('registros de la tabla: '+state.tableData);
      console.log('registros para imprimir: '+registrosParaImprimir);
      flag = '1';
    }

    return (
      <ImageBackground
        source={fondohome}
        style={styles.container}>
        <ScrollView>
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
            
            <Card
              style={{
                width: 300,
                maxHeight: 500,
                backgroundColor: 'white',
                marginTop: 10,
                borderRadius: 10,
              }}>
              <Card.Title
                title="GASTOS"
                subtitle="GASTOS DE LA SEMANA ACTUAL"
                left={AdminCount}
              />
              <MenuDivider />
              
              <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={state.tableData} textStyle={styles.text} />
        </Table>
            <MenuDivider />
            <Card.Title
                title="HISTORIAL"
                subtitle="CONSULTA DE TODOS LOS GASTOS"
                left={AdminCount}
              />
              <MenuDivider />
              <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={state.tableData2} textStyle={styles.text} />
        </Table>
            </Card>
            </View>
            </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logocontainer: {
    alignItems: 'center',
    marginBotton: 50,
    marginTop: 29,
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },
});

export default DetallesGastos;