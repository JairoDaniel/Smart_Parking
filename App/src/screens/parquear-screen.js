import React from 'react';
import { Button,View, Text,StyleSheet ,ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import * as Constantes from '../constants/constants'
import MQTTClient from '../mqtt/clientmqtt';
import Fondo from '../../assets/images/fondo6.jpg'

/*
Ventana donde el usuario puede decidir si guardar o retirar el carro del parqueo.
En esta ventana se comunica con el servidor, para cada acción, y así enviar información
al hardware
 */
export default class ParquearScreen extends React.Component {
  constructor(props) {
    super(props);
    clientUser = new MQTTClient();
  }
  render() {
    return (
      <ImageBackground source={Fondo} style={styles.imageBack}>
        <View style={styles.container}>
          <Text style={styles.paragraph}>Seleccione una acción a realizar</Text>
          <View style={styles.buttonMargin}>
            <Button
              color='#808080'
              style={styles.buttonMargin}
              title="Entrar al parqueo"
              onPress={() =>  this._onPressButtonOpen(Constantes.arrayMessageSpot[global.spot][0])}
            />
          </View>
          <View style={styles.buttonMargin}>
            <Button
              color='#808080'
              style={styles.buttonMargin}
              title="Salir del parqueo"
              onPress={() =>  this._onPressButtonClose(Constantes.arrayMessageSpot[global.spot][1])}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }

  _onPressButtonClose(spotMessage) {
      clientUser.sendData(spotMessage);
      this.props.navigation.navigate('Home');
      global.arrayCode[global.spot] = '0';
      global.arrayState[global.spot] = '0';
  }

  _onPressButtonOpen(spotMessage) {
    if(global.arrayState[global.spot] == Constantes.closeState){      
      clientUser.sendData(spotMessage);
      global.arrayState[global.spot] = '1';
    }
    else {
      alert('Ya almacenado');
    }
    
  
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  buttonMargin: {
    padding: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageBack:{
    
    width:  '100%',
    height: '100%',
  },
});