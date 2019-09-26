import React from 'react';
import { Button,View, Text,StyleSheet , ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import Fondo from '../../assets/images/fondo7.jpg'

/*
Ventana de inicio de la aplicación, donde el usuario podrá realizar la acción de 
solicitar o reservar un espacio en el parqueo o para administrar el espacio reservado
*/
export default class HomeScreen extends React.Component {
  render() {
    return (
      
      <ImageBackground source={Fondo} style={styles.imageBack}>
        <View style={styles.container}>
          <View style={styles.buttonMargin}>
            
            <Button
              color='#808080'
              title="Solicitar Parqueo"
              onPress={() => this.props.navigation.navigate('Solicitar')}
            />
          </View>
            <View style={styles.buttonMargin}>
              <Button
                color='#808080'
                title="Administrar Parqueo"
                onPress={() => this.props.navigation.navigate('Ingresar')}
              />
            </View>
          </View>
        </ImageBackground>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
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
  imageBack:{
    
    width : '100%',
    height : '100%',
  },
  
});

