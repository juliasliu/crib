import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/Colors';
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    containerInput: {
        backgroundColor: '#fff',
        flex: 0.60,
    },    
    containerInputReg: {
        backgroundColor: '#fff',
        flex: 1,
    },
    title: {
        color: '#1cad61',
        fontSize: 50,
        fontWeight: 'bold',
        margin:10,
    },
    text: {
        color: 'black',
        marginTop:0
    },
    logo: {
        width: "50%",
        height:"30%",
        resizeMode: "contain",
        padding: 0
    },

    inputField:{
        width: 0.8*deviceHeight,
        height: 40,
        backgroundColor: "#E8E8E8",
        borderRadius:10,
        justifyContent:"center",
        padding:20,
    }

  });

  export default styles;