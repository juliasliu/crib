import React, { useState } from "react";
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
  Modal,
  CheckBox,
} from 'react-native';

import StyledInput from '../../components/StyledInput';
import StyledButton from '../../components/StyledButton';

import mainStyles from '../../styles/main';
import styles from '../../styles/home';

export default function TasksScreen() {

  const [isSelected, setSelection] = useState(false);

  const CHORES_DATA = [
    {
      title: 'Trash',
      desc: "Take out the trash.",
      time: 'Expires in 8 mins',
      pic: require('../../assets/images/ramen.jpg'),
    },
    {
      title: 'Vacuum',
      desc: "Vacuum the living room.",
      time: 'Expires in 2 hours',
      pic: require('../../assets/images/ramen.jpg'),
    },
    {
      title: 'Swiffer',
      desc: "Swiffer the kitchen.",
      time: 'Expires in 1 week',
      pic: require('../../assets/images/ramen.jpg'),
    },
  ];

  const SHOPPING_DATA = [
    {
      title: 'Apples',
      desc: "1 pack",
      time: 'Expires in 8 mins',
      pic: require('../../assets/images/ramen.jpg'),
    },
    {
      title: 'Flour',
      desc: "1 lbs",
      time: 'Expires in 2 hours',
      pic: require('../../assets/images/ramen.jpg'),
    },
    {
      title: 'Milk',
      desc: "1 gallon",
      time: 'Expires in 1 week',
      pic: require('../../assets/images/ramen.jpg'),
    },
  ];

  const renderTaskItem = ({item}) => (
  <View style={mainStyles.listRow}>
    <Image source={item.pic} style={mainStyles.iconContainer} />

    <View style={mainStyles.infoContainer}>
      <Text style={mainStyles.infoTitle}>{item.title}</Text>
      <Text style={mainStyles.infoItem}>{item.desc}</Text>
    </View>
    <View style={mainStyles.timeContainer}>
      <Text style={mainStyles.timeItem}>{item.time}</Text>
    </View>
    <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
    </View>
  </View>
  )

  return (
    <ScrollView style={[mainStyles.scroll, mainStyles.container]}>
      <View style={[mainStyles.contentContainer]}>
        <Text style={mainStyles.title}>Tasks</Text>
        <Text style={mainStyles.subtitle}>Earn points by completing tasks on time. Nudge your housemates if a task is idle!</Text>
      </View>

      <View style={styles.listContainer}>
        <View style={styles.listHeader}>
          <Text style={[styles.listTitle]}>Chores</Text>
          <StyledButton title="Add" size="sm" color="orange" icon="plus" onPress={() => console.log("Add new hcore")} />
        </View>
        <FlatList
          data={CHORES_DATA}
          numColumns={1}
          renderItem={renderTaskItem}
        />
      </View>

      <View style={styles.listContainer}>
        <View style={styles.listHeader}>
          <Text style={[styles.listTitle]}>Shopping List</Text>
          <StyledButton title="Add" size="sm" color="orange" icon="plus" onPress={() => console.log("Add new hcore")} />
        </View>
        <FlatList
          data={SHOPPING_DATA}
          numColumns={1}
          renderItem={renderTaskItem}
        />
      </View>

    </ScrollView>
  );
}
