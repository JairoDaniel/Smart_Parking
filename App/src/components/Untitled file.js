import * as React from 'react';
import { TextInput,Button,Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


import { createAppContainer, createStackNavigator } from 'react-navigation'; 
import HomeScreen from './screens/home-screen'
import DetailsScreen from './screens/details'
export default class App extends React.Component {
  /*
    constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
         Ingresar contraseña
        </Text>
        <TextInput style={styles.password}
          placeholder="Contraseña"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
            onPress={this._onPressButton}
            title="Administrar Espacio"
          />
          
      </View>
    );
    }
    */
   
   render() {
      return <AppContainer />;
    }

  _onPressButton() {
    alert('Bienvenido!')
    
  }

}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);
/*
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
  password:{
    height: 40,
    fontWeight: 'bold',
    fontSize: 30,
    margin: 24,
    textAlign: 'center',
  },
});
*/