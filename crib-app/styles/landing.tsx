import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/Colors';
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      height: deviceHeight,
      width: deviceWidth,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
        color: '#1cad61',
        fontSize: 50,
        fontWeight: 'bold',
    },
    text: {
        color: 'black',
        marginTop:0
    },
    logo: {
        width: 0.3*deviceWidth,
        height:0.3*deviceHeight,
        resizeMode: "contain",
        padding: 0
    },

    input:{
        width: 0.5*deviceHeight,
        height: 40,
        backgroundColor: "#E8E8E8",
        borderRadius:25,
        justifyContent:"center",
        padding:20,
    },

  });

  export default styles;