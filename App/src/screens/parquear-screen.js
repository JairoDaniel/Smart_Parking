import React from 'react';
import { Button,View, Text,StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class ParquearScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Seleccione una acción a realizar</Text>
        <View style={styles.buttonMargin}>
          <Button
            color='#ffcc00'
            style={styles.buttonMargin}
            title="Entrar al parqueo"
            onPress={() =>  this._onPressButton('01')}
          />
        </View>
        <View style={styles.buttonMargin}>
          <Button
            color='#ffcc00'
            style={styles.buttonMargin}
            title="Salir del parqueo"
            onPress={() =>  this._onPressButton('01')}
          />
      </View>
      </View>
    );
  }

  _onPressButton(spotMessage) {
      alert('Bienvenido!');
      global.arrayCode[global.spot] = '0';
   
    
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonMargin: {
    padding: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
});