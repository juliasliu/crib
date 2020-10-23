import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  //Header containers
  profileHeader: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  profileCover: {
    flex: 1,
    width: '100%',
    height: '20%',
    padding: 20,
    backgroundColor: Colors.green,
  },
  profile: {
    padding: 20,
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameRow: {
    marginBottom: 10,
  },
  userNameText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userPointsRow: {
    marginLeft: 40,
    marginRight: 40,
  },
  userPointsText: {
    fontSize: 18,
    textAlign: 'center',
  },

  //List styles
  listContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 0,
    width: '100%',
   },

   listRow: {
    borderColor: '#f1f1f1',
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
    paddingLeft: 25,
    paddingRight: 25,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-end"
  },

  infoTitle: {
    color: '#1cad61',
    fontSize: 25,
    fontWeight: 'bold'
   },

  infoItem: {
    paddingLeft: 10,
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

  choresButton: {
    flex:0, //fix??? hard coded button width
    width:100,
    elevation: 10,
    backgroundColor: "#E8E8E8",
    borderRadius: 10, //how rounded it is
    paddingVertical: 5,
    paddingHorizontal: 0,
    alignItems:'center'
  }
});

export default styles;
