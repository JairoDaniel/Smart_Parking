import React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer} from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
 // Version can be specified in package.json
import HomeScreen from './screens/home-screen'
import DetailsScreen from './screens/details'
import IngresarScreen from './screens/ingresar'

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    Ingresar: {
      screen: IngresarScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}