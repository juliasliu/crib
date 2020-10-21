import * as React from 'react';

import {useState} from 'react';
import { Dimensions } from 'react-native'
import SegmentedControl from '../components/segmentedControl';

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

import {
  FlatList,
  Image,
  ImageBackground,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
//import { Text, View } from '../components/Themed';


const POINTS_DATA = [
  {
    title: 'Trash',
    pts: "100",
    time: '8 mins ago',
  },
  {
    title: 'Vacuum',
    pts: "50",
    time: '2 hours ago',
  },
  {
    title: 'Swiffer',
    pts: "30",
    time: '10 weeks ago',
  },
];

const CHORES_DATA = [
  {
    title: 'Trash',
    desc: "Take out the trash.",
    time: '8 mins ago',
  },
  {
    title: 'Vacuum',
    desc: "Vacuum the living room.",
    time: '2 hours ago',
  },
  {
    title: 'Swiffer',
    desc: "Swiffer the kitchen.",
    time: '10 weeks ago',
  },
];


export default function TabFiveScreen() {

  const [tabIndex, setTabIndex] = useState("");
  const handleTabsChange = (index) => {
    setTabIndex(index);
  }
  const pic = require('../assets/images/ramen.jpg');
 
  function Header(props) {
    const name = props.name;
    const id = props.id;
    const points = props.points
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerColumn}>
          <Image
              style={styles.userImage}
              source={pic}
          />
          
          <View style={styles.userNameRow}>
            <Text style={styles.userNameText}>{name}</Text>
          </View>
          
          <View style={styles.userPointsRow}>
            <Text style={styles.userPointsText}>{'@'+id}</Text>
          </View>
          
          <View style={styles.userPointsRow}>
            <Text style={styles.userPointsText}>{'[Coins]'+points}</Text>
          </View>
        </View>
      </View>
    );
  }

  function ChooseTab(props) {
    const index = props.index;
    if (index == 0) {
      return <Points />
    } else {
      return <Chores />
    }
  }

  const renderPointItem = ({item}) => (
    <View style={styles.listRow}>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>{item.title}</Text>
        <Text style={styles.infoItem}>+ {item.pts}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeItem}>{item.time}</Text>
      </View>
    </View>
  )

  const renderChoreItem = ({item}) => (
  <View style={styles.listRow}>
    <Image source={pic} style={styles.iconContainer} />

    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>{item.title}</Text>
      <Text style={styles.infoItem}>{item.desc}</Text>
     
        <TouchableOpacity 
          activeOpacity={0.8}
          onPress={handlePress}
          style={styles.choresButton}
        >
          <Text style={styles.buttonItem}>Mark Done</Text>
        </TouchableOpacity>
      
    </View>
    <View style={styles.timeContainer}>
      <Text style={styles.timeItem}>{item.time}</Text>
    </View>
  </View>
  )

  function handlePress() {

  }

  function Points(props) {
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={POINTS_DATA}
          numColumns={1}
          renderItem={renderPointItem}
        />
      </View>
      
    );
  }

  function Chores(props) {
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={CHORES_DATA}
          numColumns={1}
          renderItem={renderChoreItem}
        />

      </View>
      
    );
  }


  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Header 
          name = "Richardd Mao"
          points = "100"
          id = "HotSyrup"
        />

        <SegmentedControl
          tabs={['Points', 'Chores']}
          currentIndex={tabIndex}
          onChange={handleTabsChange}
          segmentedControlBackgroundColor='#E8E8E8'
          activeSegmentBackgroundColor='#F6F6F6'
          activeTextColor='#5DB075'
          textColor='#BDBDBD'
          paddingVertical={18}
        />
        <ChooseTab 
          index = {tabIndex}
        />

      
      </View>
    </ScrollView>
  );
}

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
  headerContainer: {
    alignItems: 'center',
    backgroundColor:'#5DB075',
    marginBottom: 10,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    width: '100%',
  },
  
  headerColumn: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
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
    borderColor: '#5DB075',
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
