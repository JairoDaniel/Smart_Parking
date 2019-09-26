/*This is an Example of Grid View in React Native*/
import React, { Component } from 'react';
//import rect in our project
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
//import all the components we will need
import Icono from '../../assets/images/imageIcon.png'
import Fondo from '../../assets/images/fondo9.jpg'
/*
Ventana de inicio, para el restaurante inteligente, se utilizó la estructura de código grid
del sitio web https://aboutreact.com/example-of-gridview-using-flatlist-in-react-native/
dado por el profesor del curso de SOA, solo se muestra un icono para llevar a la aplicación
de parqueo, los otros campos no estan disponibles.
*/
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: {},
    };
  }
  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(1)).map((v, i) => {
      return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
    });
    that.setState({
      //Setting the data source
      dataSource: items,
    });
  }
  render() {
    return (
      <ImageBackground source={Fondo} style={styles.imageBack}>
        <View style={styles.MainContainer}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <View style={{ flex: 1 ,flexDirection: 'column', margin: 15, }}>
              <TouchableHighlight onPress={item.id==0 ? () => this.props.navigation.navigate('Home') : () => this.props.navigation.navigate('Init')  } >
                <Image style={styles.imageThumbnail} source={item.id==0 ? Icono : {uri: item.src} } />
              </TouchableHighlight>
              </View>
            )}
            //Setting the number of column
            numColumns={2}
            keyExtractor={(item, index) => index}
          />
        </View>
      </ImageBackground>
    );
  }


}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },

  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  imageBack:{
    
    width : '100%',
    height : '100%',
  },
  
});