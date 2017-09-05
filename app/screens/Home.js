import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Title from '../components/CustomText/Title';
import Label from '../components/CustomText/Label';

export default class Home extends Component {
   state = {}
   render() {
      return (
         <View style={styles.container}>
            <Title text="Bienvenido, template de React-native!" />
            <Label text={'Para empezar, edita index.ios.js o index.android.js'} />
            <Label text={'Presiona Cmd+R para recargar,\nCmd+D o agita para menú de desarrollo' } />
         </View>
      );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});