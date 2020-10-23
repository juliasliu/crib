import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    backgroundColor: '#fff',
  },
  homeGraphicContainer: {
    width: '100%',
    height: '50%',
  },
  homeGraphic: {
    width: '100%',
    height: '100%',
    backgroundColor: 'blue'
  },
  homeGraphicButtons: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  //List styles
  listContainer: {
    flex: 1,
    paddingTop: 0,
    width: '100%',
    backgroundColor: '#fff',
   },
   listHeader: {
     width: '100%',
     flexDirection: 'row',
     justifyContent: 'space-between',
     padding: 20,
    backgroundColor: Colors.green,
   },

   listRow: {
    borderColor: '#f1f1f1',
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 20,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  infoContainer: {
    flex: 3,
    paddingHorizontal: 10,
    flexDirection: "column",
    },

  timeContainer: {
    flex:2,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-end"
  },

  infoTitle: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold'
   },

  infoItem: {
    color: Colors.green,
    textAlign: 'left',
    fontSize: 14,
    fontWeight: 'bold'
   },
  timeItem: {
    color: Colors.gray,
    fontSize: 14,
  },
});

export default styles;
