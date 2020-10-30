import { StyleSheet } from 'react-native';


import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
    },
  
    titleContainer: {
      flex: .7,
      flexDirection: 'column-reverse',
      backgroundColor: Colors.green,
      alignSelf: 'stretch',
  
    },

    rowContainer: {
        flex:1,
        flexDirection: 'row',

    
    },

    fieldContainer: {
        flex: 1,
        paddingStart:20,
        paddingEnd:20,
    
      },

    textContainer: {
        flex: 1,
        flexDirection: 'column-reverse',
      },
  
    inputContainer: {
      flex: 1,
      margin: 10,
  
      borderColor: Colors.gray,
      borderWidth: 1,
      borderRadius: Layout.borderRadius,
    },
  
    titleText: {
      margin: 10,
      color: 'white',
      fontSize: 28,
      fontWeight: 'bold',
  
    },
    
    nameText: {
      marginHorizontal: 10,
      color: Colors.green,
      fontSize: 25,
      fontWeight: 'bold',
  
    },
  
    nameInput: {
      flex: 1,
      marginLeft: 10,
      fontSize: 16,
    },
  
    quantityText: {
      marginHorizontal: 10,
      color: Colors.green,
      fontSize: 25,
      fontWeight: 'bold',
    },
  
    quantityInput: {
      flex: 1,
      marginLeft: 10,
      fontSize: 16,
  
    },

    unitText: {
        marginHorizontal: 10,
        color: Colors.green,
        fontSize: 25,
        fontWeight: 'bold',
    },
    
    unitInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
    
    },
  
    ownerText: {
      marginHorizontal: 10,
      color: Colors.green,
      fontSize: 25,
      fontWeight: 'bold',
    },
  
    ownerInput: {
      flex: 1,
      marginLeft: 10,
      fontSize: 16,
  
    },
  
    expirationText: {
      marginHorizontal: 10,
      color: Colors.green,
      fontSize: 25,
      fontWeight: 'bold',
    },
  
    expirationInput: {
      flex: 1,
      marginLeft: 10,
      fontSize: 16,
  
    },
  
    returnButtonContainer: {
      flex: 1,
      flexDirection: "row",
      alignSelf: 'stretch',
  
    },

    returnButton: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
  
      backgroundColor: Colors.gray,
      borderRadius: Layout.borderRadius,
  
    },
  
    returnButtonText: {
      color: 'white',
      fontSize: 45,
      fontWeight: 'bold',
  
      textShadowColor:'black',
      textShadowRadius:1,
    },
  });

  export default styles