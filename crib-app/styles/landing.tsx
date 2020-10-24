import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/Colors';
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
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
    button: {
        alignItems: 'center',
        marginTop: 30
    }, 
    logo: {
        width: 0.25*deviceWidth,
        height:0.25*deviceHeight,
        resizeMode: "contain",
        padding: 0
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'black',
        fontWeight: 'bold',
    },
    textReg: {
      color: 'white',
      fontWeight: 'bold'
  },
    registerButton: {
        width: .8*deviceWidth,
        height: 40,
        backgroundColor: '#1cad61',
        borderRadius: 25, //how rounded it is
        alignItems:'center',
        justifyContent: 'center',
    },
    signInButton: {
        width: .8*deviceWidth,
        height: 40,
        backgroundColor: "#E8E8E8",
        borderRadius: 25, //how rounded it is
        marginTop:10,
        marginBottom:10,
        alignItems:'center',
        justifyContent: 'center',
    },
    input:{
        width: .8*deviceWidth,
        height: 40,
        backgroundColor: "#E8E8E8",
        borderRadius:25,
        marginBottom:20,
        justifyContent:"center",
        alignItems:'flex-start',
        padding:20,
        marginTop:20,
    },
    inputText: {
        height:50,
        color:'black',
    },

  });

  export default styles;