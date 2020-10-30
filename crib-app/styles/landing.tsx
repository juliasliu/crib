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
    containerScroll: {
        backgroundColor: '#fff',
        flex:1,
    },    
    containerInput: {
        backgroundColor: '#fff',
        width: 0.8*deviceWidth,
    },
    title: {
        color: '#1cad61',
        fontSize: 60,
        fontWeight: 'bold',
        marginTop:5,
    },
    text: {
        color: Colors.orange,
        fontSize:15,
        fontWeight: 'bold',
        marginTop:0
    },
    logo: {
        width: "60%",
        height:"32%",
        resizeMode: "cover",
    },

    inputField:{
        height: 40,
        backgroundColor: "#E8E8E8",
        borderRadius:10,
        justifyContent:"center",
        padding:20,
    }

  });

  export default styles;