import React, { Component } from 'react';
import MapView,{PROVIDER_GOOGLE,Marker,Permission} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
class Map extends React.Component {
  static navigationOptions={
    title:"Ubicación",
    headerStyle:{
      backgroundColor:'#73C6B6',
    },    
  }
  render() {
    return (
      <View style={styles.container}>
      <Text>Mapa</Text>
        <MapView style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude:20.658861,
          longitude:-103.322711,
          latitudeDelta:0.0200,
          longitudeDelta:0.0020
        }}>
        <Marker
          coordinate={{latitude:20.658861,longitude:-103.322711}}
          title={'La escuela del ahorro'}
          >
          </Marker>
        </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
export default Map;