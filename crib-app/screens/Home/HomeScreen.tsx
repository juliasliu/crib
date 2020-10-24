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
} from 'react-native';

import StyledInput from '../../components/StyledInput';
import StyledButton from '../../components/StyledButton';
import UserItem from '../../components/UserItem';

import mainStyles from '../../styles/main';
import styles from '../../styles/home';

export default function HomeScreen({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);

  const POINTS_DATA = [
    {
      name: 'Richardd Mao',
      points: "100",
      description: '8 mins ago',
      avatar: require('../../assets/images/ramen.jpg'),
    },
    {
      name: 'Robinn Chu',
      points: "50",
      description: '2 hours ago',
      avatar: require('../../assets/images/girl.jpg'),
    },
    {
      name: 'Kobee Oh',
      points: "30",
      description: '10 weeks ago',
      avatar: require('../../assets/images/nature.jpg'),
    },
    {
      name: 'Juliaa Liu',
      points: "30",
      description: '10 weeks ago',
      avatar: require('../../assets/images/silhouette.jpg'),
    },
  ];

  const renderUserItem = ({item}) => (
    <View style={[mainStyles.listRow, {borderBottomWidth: 0}]}>
      <UserItem item={item} navigation={navigation}/>
    </View>
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
        <ScrollView contentContainerStyle={[styles.centeredView]}>
          <View style={[mainStyles.scroll, mainStyles.container, styles.modalView]}>
            <Text style={mainStyles.title}>Invite User</Text>
            <Text style={mainStyles.subtitle}>Grow your house by inviting new members!</Text>

            <StyledInput type="text" label="House code" value="12345" icon="hashtag" description="You can send the user your customized house code" editable={false} />
            <StyledInput type="text" label="Username" icon="search" placeholder="Search by username" description="You can send the user an invite to your house" />
            <StyledButton title="Add User" color="green" icon="plus" onPress={() => console.log("hi")} style={{marginTop: 20}}/>
            <StyledButton title="Close" color="orange" icon="close" onPress={() => setModalVisible(!modalVisible)} style={{marginTop: 20}}/>
          </View>
        </ScrollView>
      </Modal>

      <View style={styles.homeGraphicContainer}>
        <View style={styles.homeGraphic}>
          <Image
          style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}
          source={require('../../assets/images/neko_atsume.jpeg')}
          />
        </View>
        <View style={styles.homeGraphicButtons}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ChatScreen")
            }}
            style={[mainStyles.iconButton, styles.homeGraphicButton]}>
            <Ionicons name="ios-chatbubbles" size={20} style={mainStyles.icon}></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity
              onPress={() => {
                navigation.navigate("TasksScreen")
              }}
              style={[mainStyles.iconButton, styles.homeGraphicButton]}>
              <Ionicons name="ios-list" size={20} style={mainStyles.icon}></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
      <View style={mainStyles.listContainer}>
        <View style={mainStyles.listHeader}>
          <Text style={[mainStyles.listTitle]}>Housemates</Text>
          <StyledButton title="Invite" size="sm" color="orange" icon="plus" onPress={() => setModalVisible(true)} />
        </View>
        <FlatList
          data={POINTS_DATA}
          numColumns={1}
          renderItem={renderUserItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}
