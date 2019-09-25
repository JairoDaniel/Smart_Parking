import React from 'react';
import { Button,View, Text,StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.text}>Smart Parking</Text>
      <View style={styles.buttonMargin}>
        
        <Button
          color='#ffcc00'
          title="Solicitar Parqueo"
          onPress={() => this.props.navigation.navigate('Solicitar')}
        />
       </View>
        <View style={styles.buttonMargin}>
          <Button
            color='#ffcc00'
            title="Administrar Parqueo"
            onPress={() => this.props.navigation.navigate('Ingresar')}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    alignItems: 'center',
  },
  buttonMargin: {
    padding: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});

