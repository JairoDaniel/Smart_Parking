import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer} from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
 // Version can be specified in package.json
import HomeScreen from './src/screens/home-screen'
import SolicitarScreen from './src/screens/solicitar-screen'
import IngresarScreen from './src/screens/ingresar-screen'
import CodigoScreen from './src/screens/codigo-screen'
import ParquearScreen from './src/screens/parquear-screen'
import InitScreen from './src/screens/init-screen'

/*
Inicializa las ventanas que se usaran  durante la ejecución de la aplicación
 */
const RootStack = createStackNavigator(
  {
     
   
    Home: {
      navigationOptions: {
        title: "Smart Parking",
        headerStyle: {
          backgroundColor: '#0f1012',
        },
        headerTintColor: 'white',
      },
      screen: HomeScreen,
    },
    Init: {
      navigationOptions: {
        title: "Restaurante Inteligente",
        headerStyle: {
          backgroundColor: '#1d1d1d',
        },
        headerTintColor: 'white',
      },
      screen: InitScreen,
    },
    Solicitar: {
      navigationOptions: {
        title: "Smart Parking",
        headerStyle: {
          backgroundColor: '#2a2a2a',
        },
        headerTintColor: 'white',
      },
      screen: SolicitarScreen,
    },
    Ingresar: {
      navigationOptions: {
        title: "Smart Parking",
        headerStyle: {
          backgroundColor: '#202020',
        },
        headerTintColor: 'white',
      },
      screen: IngresarScreen,
    },
    Codigo: {
      screen: CodigoScreen,
      navigationOptions: {
        title: "Smart Parking",
        headerStyle: {
          backgroundColor: '#283651',
        },
        headerTintColor: 'white',

        headerLeft: null,
      },
    },
    Parquear: {
      navigationOptions: {
        title: "Smart Parking",
        headerStyle: {
          backgroundColor: '#15091f',
        },
        headerTintColor: 'white',
      },
      screen: ParquearScreen,
    },
  },
  {
    initialRouteName: 'Init',
  }
);

const AppContainer = createAppContainer(RootStack);
/*
Inicializa la aplicación
*/
export default class App extends React.Component {
  constructor(){
 
    super();
    global.arrayCode = ['0', '1','0', '1'];
    global.arrayState = ['0', '1','0', '1'];
    global.spot = 0;
  }
  render() {
    return <AppContainer />;
  }
}