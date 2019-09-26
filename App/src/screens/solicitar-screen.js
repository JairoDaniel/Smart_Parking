import React from 'react';
import { ImageBackground,Button, View, Text,Dimensions,StyleSheet } from 'react-native';
import Fondo from '../../assets/images/fondo3.jpg'
const { width, height } = Dimensions.get('window');
import Constants from 'expo-constants';
/*
Ventanta para reservar un espacio en el parqueo, el espacio se muestra en rojo en caso que
no este disponible, en caso contrario en verde
*/
export default class SolicitarScreen extends React.Component {
  render() {
    return (
    <ImageBackground source={Fondo} style={styles.imageBack}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Por favor seleccione un parqueo a reservar
        </Text>
      </View>
      <View style={styles.parqueo1}>
        <Button 
          color={global.arrayCode[0] == '0' ?  '#009900' : '#cc0000' }
          title="        "
          onPress={() => this._onPressButton(0)}
        />
      </View>
      <View style={styles.parqueo2}>
        <Button
          color={global.arrayCode[1] == '0' ? '#009900' : '#cc0000'}
          title="        "
          onPress={() => this._onPressButton(1)}
        />
      </View>
      <View style={styles.parqueo3}>
        <Button
          color={global.arrayCode[2] == '0' ? '#009900' : '#cc0000'}
          title="        "
          onPress={() => this._onPressButton(2)}
        />
      </View>
      <View style={styles.parqueo4}>
        <Button
        
          color={global.arrayCode[3] == '0' ? '#009900' : '#cc0000'}
          title="        "
          onPress={() => this._onPressButton(3)}
        />

      </View>

       </ImageBackground>
    );
  }
  _onPressButton(spotNumber) {

    if(global.arrayCode[spotNumber] != '0' ){
       alert('Espacio no disponible!');
    }
    else{
      global.spot=spotNumber;
      this.props.navigation.navigate('Codigo');
    }

    
    
  }
}

const styles = StyleSheet.create({
  parqueo1: {
    alignItems: 'flex-end',
    position: 'absolute', 
    marginLeft: 30,
    marginTop: 180,
  },
  parqueo2: {
    alignItems: 'flex-end',
    position: 'absolute', 
    marginLeft: 115,
    marginTop: 180,
  },
  parqueo3: {
    alignItems: 'flex-end',
    position: 'absolute', 
    marginLeft: 200,
    marginTop: 180,
  },
  parqueo4: {
    alignItems: 'flex-end',
    position: 'absolute', 
    marginLeft: 295,
    marginTop: 180,

  },
    text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'white',
  },
  container: {
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    
  },
  imageBack:{
    
    width:  '100%',
    height: '100%',
  }

});
