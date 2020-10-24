import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    backgroundColor: Colors.backgroundWhite,
  },

  // Home graphic
  homeGraphicContainer: {
    width: '100%',
    height: '50%',
  },
  homeGraphic: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.darkGray,
  },
  homeGraphicButtons: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  homeGraphicButton: {
      marginTop: 20,
      marginHorizontal: 20,
  },

  // List styles
  listContainer: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: Colors.backgroundWhite,
   },
   listHeader: {
     width: '100%',
     flexDirection: 'row',
     justifyContent: 'space-between',
     paddingHorizontal: 10,
     paddingVertical: 20,
   },
   listTitle: {
     fontSize: 20,
     paddingVertical: 5,
     fontWeight: 'bold',
     color: Colors.darkGray,
   },

  // Modal View
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },

  // CheckBox
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
});

export default styles;
