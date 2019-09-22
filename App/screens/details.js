import React from 'react';
import { ImageBackground,Button, View, Text,Dimensions } from 'react-native';
import Fondo from '../images/fondo.jpg'
const { width, height } = Dimensions.get('window');

export default class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <ImageBackground source={Fondo} style={{
    resizeMode: 'cover',
    width:  width,
    height: height,}}>

      </ImageBackground>
      <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}