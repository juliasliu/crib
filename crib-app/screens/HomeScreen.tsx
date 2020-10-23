import * as React from 'react';
import Icon from '@expo/vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
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

import mainStyles from '../styles/main';
import styles from '../styles/home';

export default function HomeScreen({ navigation }) {

  const picture = require('../assets/images/ramen.jpg');

  const POINTS_DATA = [
    {
      name: 'Richardd Mao',
      pts: "100",
      time: '8 mins ago',
      avatar: picture,
    },
    {
      name: 'Robinn Chu',
      pts: "50",
      time: '2 hours ago',
      avatar: picture,
    },
    {
      name: 'Kobee Oh',
      pts: "30",
      time: '10 weeks ago',
      avatar: picture,
    },
    {
      name: 'Juliaa Liu',
      pts: "30",
      time: '10 weeks ago',
      avatar: picture,
    },
  ];

  const renderPointItem = ({item}) => (
    <TouchableOpacity style={styles.listRow} onPress={() => navigation.navigate("Profile")}>
      <Image
        style={styles.iconContainer}
        source={item.avatar}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>{item.name}</Text>
        <Text style={styles.infoItem}>{item.pts} pts</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeItem}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <View style={styles.homeGraphicContainer}>
        <View style={styles.homeGraphic}></View>
        <View style={styles.homeGraphicButtons}>
          <TouchableOpacity style={[mainStyles.iconButton, {marginHorizontal: 20}]}>
            <Ionicons name="ios-chatbubbles" size={20} style={mainStyles.icon}></Ionicons>
            <Text style={mainStyles.iconLabel}>Chat</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity style={mainStyles.iconButton}>
              <Ionicons name="ios-notifications" size={20} style={mainStyles.icon}></Ionicons>
              <Text style={mainStyles.iconLabel}>Reminders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={mainStyles.iconButton}>
              <Ionicons name="ios-list" size={20} style={mainStyles.icon}></Ionicons>
              <Text style={mainStyles.iconLabel}>Tasks</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.listHeader}>
          <Text style={[mainStyles.listTitle, {color: '#fff'}]}>Housemates</Text>
          <TouchableOpacity style={[mainStyles.iconButtonRow]}>
            <Ionicons name="ios-person-add" size={20} style={{paddingRight: 5, color: '#fff'}}></Ionicons>
            <Text style={[mainStyles.iconLabel, {color: '#fff'}]}>Invite</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={POINTS_DATA}
          numColumns={1}
          renderItem={renderPointItem}
        />
      </View>
    </View>
  );
}
