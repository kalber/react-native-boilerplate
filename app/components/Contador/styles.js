import { StyleSheet } from 'react-native';

export default style = StyleSheet.create({
   container: {
      flexDirection: 'row'
   },
   button: {
      borderColor: '#AAA',
      borderWidth: 1,
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10
   },
   buttonLeft: {
      borderBottomLeftRadius: 10,
      borderTopLeftRadius: 10,
      backgroundColor: '#F66'
   },
   buttonRight: {
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10,
      backgroundColor: '#66F'
   },
   buttonText: {
      padding: 0,
      margin: 0,
      textAlign: 'center',
      color: 'white',
      fontSize: 20
   },
   counterContainerText: {
      borderWidth: 1,
      borderColor: '#AAA',
      minWidth: 40,
      alignItems: 'center',
      justifyContent: 'center'
   }
});