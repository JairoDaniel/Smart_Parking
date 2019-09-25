import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer} from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
 // Version can be specified in package.json
import HomeScreen from './src/screens/home-screen'
import SolicitarScreen from './src/screens/solicitar-screen'
import IngresarScreen from './src/screens/ingresar-screen'
import CodigoScreen from './src/screens/codigo-screen'
import AdministrarScreen from './src/screens/administrar-screen'
import ParquearScreen from './src/screens/parquear-screen'
const RootStack = createStackNavigator(
  {
     
   
    Home: {
      navigationOptions: {
        title: "Smart Parking",
      },
      screen: HomeScreen,
    },
    Solicitar: {
      navigationOptions: {
        title: "Smart Parking",
      },
      screen: SolicitarScreen,
    },
    Ingresar: {
      navigationOptions: {
        title: "Smart Parking",
      },
      screen: IngresarScreen,
    },
    Codigo: {
      screen: CodigoScreen,
      navigationOptions: {
        title: "Smart Parking",
        headerLeft: null,
      },
    },
    Administrar: {
      navigationOptions: {
        title: "Smart Parking",
      },
      
      screen: AdministrarScreen,
    },
    Parquear: {
      navigationOptions: {
        title: "Smart Parking",
      },
      screen: ParquearScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {
  constructor(){
 
    super();
    global.arrayCode = ['0', '1','0', '1'];
    global.spot = 0;
  }
  render() {
    return <AppContainer />;
  }
}