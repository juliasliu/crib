import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scroll: {
      backgroundColor: Colors.white,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    financesCover: {
      flex: 1,
      width: '100%',
      paddingLeft: 10,
      paddingTop: 25,
      paddingBottom: 25,
      backgroundColor: Colors.green,
    },
})


export default styles;