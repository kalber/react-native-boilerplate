import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';

import style from './styles';
import { counterUp, counterDown } from '../../actions';

function mapStateToProps(state, props) {
   return {
      counter: state.counter
   };
}
@connect(mapStateToProps)
export default class Contador extends Component {
   state = {}
   counterUp() {
      this.props.dispatch(counterUp());
   }
   counterDown() {
      this.props.dispatch(counterDown());
   }
   render() {
      return (
         <View style={style.container}>
            <TouchableOpacity style={[style.button, style.buttonLeft]} onPress={() => this.counterDown()} >
               <Text style={style.buttonText}>-</Text>
            </TouchableOpacity>

            <View style={style.counterContainerText}>
               <Text>{this.props.counter}</Text>
            </View>   

            <TouchableOpacity style={[style.button, style.buttonRight]} onPress={() => this.counterUp()}>
               <Text style={style.buttonText}>+</Text>
            </TouchableOpacity>
         </View>
      );
   }
}