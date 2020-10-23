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
  Modal,
} from 'react-native';

import StyledButton from '../components/StyledButton';
import UserItem from '../components/UserItem';

import mainStyles from '../styles/main';
import styles from '../styles/home';

export default function HomeScreen({ navigation }) {

  let modalVisible = false;

  const setModalVisible = (visible) => {
    modalVisible = visible;
  }

  const POINTS_DATA = [
    {
      name: 'Richardd Mao',
      points: "100",
      description: '8 mins ago',
      avatar: require('../assets/images/ramen.jpg'),
    },
    {
      name: 'Robinn Chu',
      points: "50",
      description: '2 hours ago',
      avatar: require('../assets/images/girl.jpg'),
    },
    {
      name: 'Kobee Oh',
      points: "30",
      description: '10 weeks ago',
      avatar: require('../assets/images/nature.jpg'),
    },
    {
      name: 'Juliaa Liu',
      points: "30",
      description: '10 weeks ago',
      avatar: require('../assets/images/silhouette.jpg'),
    },
  ];

  const renderUserItem = ({item}) => (
    <UserItem name={item.name} points={item.points} avatar={item.avatar} description={item.description} navigation={navigation}/>
  )

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.homeGraphicContainer}>
        <View style={styles.homeGraphic}></View>
        <View style={styles.homeGraphicButtons}>
          <View>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}
              style={[mainStyles.iconButton, styles.homeGraphicButton, mainStyles.greenButton]}>
              <Ionicons name="ios-chatbubbles" size={20} style={mainStyles.icon}></Ionicons>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
              }}
              style={[mainStyles.iconButton, styles.homeGraphicButton, mainStyles.greenButton]}>
              <Ionicons name="ios-notifications" size={20} style={mainStyles.icon}></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                }}
                style={[mainStyles.iconButton, styles.homeGraphicButton, mainStyles.greenButton]}>
                <Ionicons name="ios-list" size={20} style={mainStyles.icon}></Ionicons>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.listHeader}>
          <Text style={[styles.listTitle]}>Housemates</Text>
          <StyledButton title="Invite" size="sm" color="orange" icon="plus" />
        </View>
        <FlatList
          data={POINTS_DATA}
          numColumns={1}
          renderItem={renderUserItem}
        />
      </View>
    </View>
  );
}
