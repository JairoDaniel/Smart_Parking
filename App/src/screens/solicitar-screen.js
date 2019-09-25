import React from 'react';
import { ImageBackground,Button, View, Text,Dimensions,StyleSheet } from 'react-native';
import Fondo from '../../assets/images/fondo.jpg'
const { width, height } = Dimensions.get('window');
import Constants from 'expo-constants';
export default class SolicitarScreen extends React.Component {
  render() {
    return (
    <ImageBackground source={Fondo} style={styles.imageBack}>

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
      <View style={styles.container}>
        <Text style={styles.text}>
          Por favor seleccione un parqueo a reservar
        </Text>
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
    marginLeft: 25,
    marginTop: 40,
  },
  parqueo2: {
    alignItems: 'flex-end',
    position: 'absolute', 
    marginLeft: 102,
    marginTop: 40,
  },
  parqueo3: {
    alignItems: 'flex-end',
    position: 'absolute', 
    marginLeft: 180,
    marginTop: 40,
  },
  parqueo4: {
    alignItems: 'flex-end',
    position: 'absolute', 
    marginLeft: 265,
    marginTop: 40,
  },
    text: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    marginTop: 200,
  },
  imageBack:{
    
    width:  '95%',
    height: '60%',
    margin:18,
  }

});
