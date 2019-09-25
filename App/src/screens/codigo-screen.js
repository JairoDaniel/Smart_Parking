import React from 'react';
import { TextInput,Button,Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default class CodigoScreen extends React.Component {

  constructor(props) {
    super(props);
    global.arrayCode[global.spot]=randomString(8, '#aA');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
         Por favor guarde el siguiente código
        </Text>
        <Text selectable={true} style={styles.passwordText} >
         {global.arrayCode[global.spot]}
        </Text>   
        <Button
            color='#ffcc00'
            onPress={() => this.props.navigation.navigate('Home')}
            title="Aceptar"
          />     
      </View>
    );
    }

}
//https://stackoverflow.com/questions/10726909/random-alpha-numeric-string-in-javascript
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
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  passwordText:{
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#ecf0f1',
  }
});
