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


  // Flat lists
  listRow: {
   borderColor: Colors.veryLightGray,
   borderBottomWidth: 1,
   flexDirection: 'row',
   marginLeft: 10,
   marginRight: 10,
   paddingTop: 10,
   paddingBottom: 10,
 },

 iconContainer: { //Can be used as a view conatiner or styling the image itself
   alignItems: 'center',
   borderColor: Colors.green,
   borderRadius: 10,
   borderWidth: 1,
   justifyContent: 'center',
   height: 50,
   width: 50
 },

 infoContainer: {
   flex: 1,
   paddingLeft: 20,
   paddingRight: 20,
   flexDirection: "column",
   },

 timeContainer: {
   flex:1,
   paddingRight: 25,
   flexDirection: "row",
   alignItems: "baseline",
   justifyContent: "flex-end"
 },

 infoTitle: {
   color: Colors.darkGray,
   fontSize: 20,
   fontWeight: 'bold'
  },

 infoItem: {
   textAlign: 'left',
   fontSize: 13.5,
  },
 buttonItem:{
   fontSize: 16,
  },
 timeItem: {
   color: 'gray',
   fontSize: 13.5,
 },
});

export default styles;
