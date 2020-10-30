import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/Colors';
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    landingContainer: {
      flex: 1,
      width: '80%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      paddingVertical: 50,
    },
    landingTitle: {
      marginBottom: 20,
      alignItems: 'center',
      backgroundColor: 'transparent'
    },
    title: {
        color: '#1cad61',
        fontSize: 60,
        fontWeight: 'bold',
    },
    text: {
        color: Colors.darkGray,
        fontSize: 20,
        fontWeight: 'bold',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: "contain",
    },
  });

  export default styles;
