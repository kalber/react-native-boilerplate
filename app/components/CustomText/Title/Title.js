import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class Title extends Component {
   state = {  }
   render() {
      return (
         <View>
            <Text style={styles.title}>
               { this.props.text }
            </Text>
         </View>
      );
   }
}

