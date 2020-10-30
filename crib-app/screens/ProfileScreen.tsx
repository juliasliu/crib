import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
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

import styles from '../styles/profile';

import mainStyles from '../styles/main';
import homeStyles from '../styles/home';

import StyledButton from '../components/StyledButton'
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


export default function ProfileScreen() {

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
      <View style={styles.profile}>
        <View style={styles.profileContent}>
          <Image
              style={styles.userImage}
              source={pic}
          />
          <View style={styles.nameRow}>
            <Text style={styles.nameText}>{name}</Text>
          </View>

          <View style={styles.usernameRow}>
            <Text style={styles.usernameText}>{'@'+id}</Text>
          </View>

          <View style={styles.userPointsRow}>
    <Text style={styles.userPointsText}>[coin]{points}</Text>
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

      <StyledButton title="Mark Done" color="green" onPress={handlePress} style={styles.choresButton}/>
      

    </View>
    <View style={styles.timeContainer}>
      <Text style={styles.timeItem}>{item.time}</Text>
    </View>
  </View>
  )

  /*  <TouchableOpacity
          activeOpacity={0.8}
          onPress={handlePress}
          style={styles.choresButton}
        >
          <Text style={styles.buttonItem}>Mark Done</Text>
        </TouchableOpacity>*/

  function handlePress() {
     alert('signed in')
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
    <ScrollView style={[styles.scroll, styles.container]}>
      <View style={[styles.container, styles.profileContainer]}>
    
        
        <View style={styles.profileCover}>
        </View>
        <View style={[homeStyles.homeGraphicButtons]}>
          <TouchableOpacity
            onPress={() => {
              alert('ughh')
            }}
            style={[mainStyles.iconButton, homeStyles.homeGraphicButton]}>
            <Ionicons name="ios-settings" size={20} style={[mainStyles.icon]}></Ionicons>
          </TouchableOpacity>
        </View>
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
        />
        <ChooseTab
          index = {tabIndex}
        />


      </View>
    </ScrollView>
  );
}
