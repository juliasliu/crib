import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scroll: {
      backgroundColor: Colors.backgroundWhite,
    },
    title: {
      fontSize: 38,
      fontWeight: 'bold',
      color: Colors.white,
    },
    text: {
      fontSize: 20,
      color: Colors.white,
    },
    incoming: {
      fontSize: 20,
      color: 'black',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },

    financesCover: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      paddingLeft: 10,
      paddingTop: 25,
      paddingBottom: 25,
      backgroundColor: Colors.green,
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
    },
    incomingContainer: {
      flex: 1,
      backgroundColor: Colors.white,
      borderBottomWidth: 0,
      marginTop:10,
      marginBottom:10,
      marginHorizontal:20,
      borderRadius:10,

    },
 
    flatList: {
      borderRadius: 15,
      alignSelf: "stretch",
      backgroundColor: 'white',
      marginHorizontal: 10
    },

    entryContainer: {
      flex: 1,
      flexDirection:'row',
      borderBottomWidth: 1,
      borderColor: '#f1f1f1',
      paddingLeft: 5,
    },

    infoContainer: {
      flex: 1,
      paddingLeft: 0,
      paddingRight: 0,
      },
    
    timeContainer: {
      flex:1,
      paddingLeft: 5,
      paddingRight: 5,
      flexDirection: "row",
      alignItems: "baseline",
      justifyContent: "flex-end"
    },
    entryStyle: {
      fontSize: 18,
      alignItems: 'flex-start',
    },
    reqStyle: {
      fontSize: 18,
      color: 'red',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    paidStyle: {
      fontSize: 18,
      color: 'green',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
  
})


export default styles;