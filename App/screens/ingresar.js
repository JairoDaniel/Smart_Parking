import React from 'react';
import { TextInput,Button,Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


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
            onPress={this._onPressButton}
            title="Administrar Espacio"
          />
          
      </View>
    );
    }


  _onPressButton() {
    alert('Bienvenido!')
    
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
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
  },
});
