import React,{Component} from 'react';
import Container from './paginas/contenedor';
import Splash from './paginas/Splash';
import Reg from './paginas/Sesion';

class App extends Component{
  state = {
     timePassed: false
  }

  componentDidMount () {
     setTimeout(() => this.setState({timePassed: true}), 2000)
  }
  render(){
    return this.state.timePassed ? (
        <Container/>
    ) : <Splash/>;
  }
}
export default App;


/*import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Change code in the editor and watch it change on your phone! Save to get a shareable url.
      </Text>
      <Card>
        <AssetExample />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});*/
