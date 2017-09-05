import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class Label extends Component {
   state = {  }
   render() {
      return (
         <View>
            <Text style={styles.label}>
               {this.props.text}
            </Text>
         </View>   
      );
   }
}