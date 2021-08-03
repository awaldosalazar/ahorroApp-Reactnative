import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import PDFReader from 'rn-pdf-reader-js';
import Constants from 'expo-constants';
class Pdfview extends React.Component{
  static navigationOptions={
    title:"VISOR PDF",
    headerStyle:{
      backgroundColor:'#73C6B6',
    },    
  }
  render(){
    return(
      <View style={styles.container}>
         <PDFReader
          source={{ uri: "http://gahp.net/wp-content/uploads/2017/09/sample.pdf" }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
export default Pdfview;