import React from 'react';
import { Button,View, Text,StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class AdministrarScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Smart Parking</Text>
        <Button
          style={styles.buttonMargin}
          title="Entrar"
          onPress={() => this.props.navigation.navigate('Solicitar')}
        />
        <Button
          style={styles.buttonMargin}
          title="Salir"
          onPress={() => this.props.navigation.navigate('Ingresar')}
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
    alignItems: 'center',
  },
  buttonMargin: {
    margin: 50,
    padding: 50,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});