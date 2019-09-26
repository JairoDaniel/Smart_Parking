import React from 'react';
import { TextInput,Button,Text, View, StyleSheet ,ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import Fondo from '../../assets/images/fondo4.jpg'

/*
Ventana para generar el código, cuando el usuario reserva un espacio, este codigo
el usuario deberá de guardarlo (el medio depende del usuario), se usará para administrar
el espacio reservado
*/
export default class CodigoScreen extends React.Component {

  constructor(props) {
    super(props);
    global.arrayCode[global.spot]=randomString(8, '#aA');
  }
  render() {
    return (
      <ImageBackground source={Fondo} style={styles.imageBack}>
        <View style={styles.container}>
          <Text style={styles.paragraph}>
          Por favor guarde el siguiente código
          </Text>
          <Text selectable={true} style={styles.passwordText} >
          {global.arrayCode[global.spot]}
          </Text>   
          <Button
              color='#808080'
              onPress={() => this.props.navigation.navigate('Home')}
              title="Aceptar"
            />     
        </View>
      </ImageBackground>
    );
    }

}
/*
Genera el código para el usuario, el código fue analizado desde el sitio web :
//https://stackoverflow.com/questions/10726909/random-alpha-numeric-string-in-javascript
*/
function randomString(length, chars) {
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = '';
    for (var i = length; i > 0; --i) result += mask[Math.round(Math.random() * (mask.length - 1))];
    return result;
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
    color: 'white',
  },
  passwordText:{
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(236, 240, 241, 0.6)',
  },
  imageBack:{
    
    width:  '100%',
    height: '100%',
  }
});
