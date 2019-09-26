import React from 'react';
import { TextInput,Button,Text, View, StyleSheet,ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import * as Constantes from '../constants/constants'
import Fondo from '../../assets/images/fondo5.jpg'

/*
Ventana donde el usuario ingresa la contraseña generada, en la ventana codigo-screen, 
una vez reservada, validando la contraseña, procede a realizar las acciones de la
ventana parquear-screen
*/
export default class IngresarScreen extends React.Component {
  
    constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <ImageBackground source={Fondo} style={styles.imageBack}>
        <View style={styles.container}>
          <Text style={styles.paragraph}>
          Ingresar contraseña
          </Text>
          <TextInput style={styles.password}
            placeholder="CONTRASEÑA"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <Button
              color='#808080'
              onPress={() => this._onPressButton(this.state.text)}
              title="Administrar Espacio"
            />
            
        </View>
      </ImageBackground>
    );
    }


  _onPressButton(passwordText) {
    if(passwordText == '' | passwordText == ' '){
      alert('Por favor ingrese una contraseña')
    }
    else{
      let i;
      for( i = 0; i < Constantes.sizeArrayCode; i++){            
            if(global.arrayCode[i] == passwordText ){
              global.spot = i;
              break;
            }
      }
      if(i <  Constantes.sizeArrayCode){
        this.props.navigation.navigate('Parquear')
      }
      else{
        alert('Contraseña invalida')
      }    
    
    }

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  password:{
    fontWeight: 'bold',
    fontSize: 18,
    margin: 24,
    textAlign: 'center',
    backgroundColor: '#ecf0f1',
  },
  imageBack:{
    
    width:  '100%',
    height: '100%',
  },
});
