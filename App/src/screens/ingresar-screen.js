import React from 'react';
import { TextInput,Button,Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Constantes from '../constants/constants'

export default class IngresarScreen extends React.Component {
  
    constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
         Ingresar contraseña
        </Text>
        <TextInput style={styles.password}
          placeholder="Contraseña"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
            color='#ffcc00'
            onPress={() => this._onPressButton(this.state.text)}
            title="Administrar Espacio"
          />
          
      </View>
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
        alert('Codigo no existente')
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
  },
  password:{
    height: 40,
    fontWeight: 'bold',
    fontSize: 30,
    margin: 24,
    textAlign: 'center',
    backgroundColor: '#ecf0f1',
  },
});
