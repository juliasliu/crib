import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    backgroundColor:'#fff',
    height:"50%",
  },
  profileContainer: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  //Header containers
  profileCover: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '20%',
    backgroundColor: Colors.green,
  },
  profile: {
    marginTop: 100,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profileContent: {
    top: -85,
    marginBottom: -85,
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 10,
    width: 170,
  },
  nameRow: {
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  usernameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  usernameText: {
    fontSize: 18,
    color: Colors.gray,
    textAlign: 'center',
  },
  userPointsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userPointsText: {
    fontSize: 18,
    color: Colors.gray,
    textAlign: 'center',
  },

  //List styles
  listContainer: {
    flex: 1,
    paddingTop: 0,
    width: '100%',
    backgroundColor: '#fff',
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
    paddingRight: 0,
    flexDirection: "column",
    },

  timeContainer: {
    flex:1,
    paddingLeft: 0,
    paddingRight: 25,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "flex-end"
  },

  infoTitle: {
    color: Colors.green,
    fontSize: 25,
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

  choresButton: {
    flex:0, //fix??? hard coded button width
    width:100,
    elevation: 10,
    borderRadius: 10, //how rounded it is
    paddingVertical: 5,
    paddingHorizontal: 0,
    alignItems:'center'
  }
});

export default styles;
