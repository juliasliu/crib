import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    backgroundColor: '#FFF',
  },

  // Icons
  iconButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: "#fff",
  },

  // Buttons
  greenButton: Colors.greenButton,
  orangeButton: Colors.orangeButton,
  yellowButton: Colors.yellowButton,
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 50,
    backgroundColor: Colors.green,
    shadowColor: Colors.darkGreen,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  homeButton: {
    backgroundColor: Colors.green,
    shadowColor: Colors.darkGreen,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
});

export default styles;
