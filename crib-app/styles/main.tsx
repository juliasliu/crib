import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    borderColor: Colors.veryLightGray,
    borderBottomWidth: 1,
  },
  scroll: {
    backgroundColor: Colors.backgroundWhite,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Titles
  title: {
    fontSize: 20,
    paddingVertical: 5,
    fontWeight: 'bold',
    color: Colors.darkGray,
  },
  subtitle: {
    color: Colors.darkGray,
    marginBottom: 10
  },
  small: {
    color: Colors.gray,
  },

  greenText: {color: Colors.green},
  orangeText: {color: Colors.orange},
  yellowText: {color: Colors.yellow},

  // Icons
  iconButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: "#fff",
  },

  // Buttons
  greenButton: {
    backgroundColor: Colors.green,
    shadowColor: Colors.darkGreen,
  },
  orangeButton: {
    backgroundColor: Colors.orange,
    shadowColor: Colors.darkOrange,
  },
  yellowButton: {
    backgroundColor: Colors.yellow,
    shadowColor: Colors.darkYellow,
  },
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

  // Flat lists
  listRow: {
   flex: 1,
   borderColor: Colors.veryLightGray,
   borderBottomWidth: 1,
   flexDirection: 'row',
   paddingHorizontal: 20,
 },
 listContainer: {
   flex: 1,
   paddingTop: 0,
   width: '100%',
   backgroundColor: Colors.backgroundWhite,
  },
  listHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  listTitle: {
    fontSize: 20,
    paddingVertical: 5,
    fontWeight: 'bold',
    color: Colors.darkGray,
  },

   // CheckBox
   checkboxContainer: {
     flex: 1,
     flexDirection: "row",
     justifyContent: "flex-start",
     alignItems: "flex-start",
     marginBottom: 20,
     padding: 0,
   },
   checkbox: {
     paddingVertical: 10,
     paddingHorizontal: 0,
     margin: 0,
   },
   iconContainer: {
     flex: 1,
     padding: 10,
     flexDirection: "row",
     justifyContent: "flex-start",
     alignItems: "flex-start",
   },
   iconItem: {
     width: 50,
     height: 50,
     borderRadius: 50,
     borderWidth: 1,
     borderColor: Colors.veryLightGray,
   },

 infoContainer: {
   flex: 4,
   padding: 10,
   flexDirection: "column",
   },
  infoTitle: {
    color: Colors.darkGray,
    fontSize: 18,
    fontWeight: 'bold'
  },
  infoItem: {
    color: Colors.gray,
    textAlign: 'left',
    fontSize: 14,
    fontWeight: 'bold'
   },

 timeContainer: {
   flex: 2,
   paddingVertical: 10,
   flexDirection: "row",
   justifyContent: 'flex-start',
   alignItems: "flex-start",
 },
  timeItem: {
    color: Colors.gray,
    fontSize: 14,
    paddingTop: 4,
  },
 avatarContainer: {
   flex: 1,
   paddingVertical: 10,
   flexDirection: "row",
   justifyContent: "flex-end",
   alignItems: "flex-start",
 },
 avatar: {
   borderRadius: 40,
   borderWidth: 1,
   height: 40,
   width: 40,
   borderWidth: 1,
   borderColor: Colors.veryLightGray,
 },
 caretContainer: {
   flex: 1,
   paddingVertical: 10,
   justifyContent: 'flex-start',
   alignItems: "flex-end",
 },
 caret: {
   color: Colors.gray,
 },


});

export default styles;
