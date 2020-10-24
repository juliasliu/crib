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

import mainStyles from '../../styles/main';
import styles from '../../styles/home';

export default class ChatScreen extends React.Component {

  state = {
      CHORES_DATA: [
        {
          id: 0,
          type: "Chore",
          title: 'Trash',
          desc: "Take out the trash.",
          time: '8 mins',
          owner: require('../../assets/images/girl.jpg'),
          checked: false,
        },
        {
          id: 1,
          type: "Chore",
          title: 'Vacuum',
          desc: "Vacuum the living room.",
          time: '2 hours',
          owner: require('../../assets/images/nature.jpg'),
          checked: false,
        },
        {
          id: 2,
          type: "Chore",
          title: 'Swiffer',
          desc: "Swiffer the kitchen.",
          time: '1 week',
          owner: require('../../assets/images/ramen.jpg'),
          checked: false,
        },
      ],
  }

  renderMessage = ({item, type}) => (
    <TaskItem item={item} toggleChecked={this.setToggleCheckBox.bind(this)} />
  )

  render() {
    return (
      <ScrollView style={[mainStyles.scroll, mainStyles.container]}>

      </ScrollView>
    );
  }
}
