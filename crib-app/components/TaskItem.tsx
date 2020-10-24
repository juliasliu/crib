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
import { CheckBox } from 'react-native-elements'

import mainStyles from '../styles/main';
import Colors from '../constants/Colors';

export default function TaskItem({ item, toggleChecked }) {
  return (
    <View style={mainStyles.listRow}>
      <View style={mainStyles.checkboxContainer}>
      <CheckBox
        checked={item.checked}
        onPress={() => toggleChecked(item.id, item.type)}
        containerStyle={mainStyles.checkbox}
        checkedColor={Colors.green}
        />
      </View>

      <View style={mainStyles.infoContainer}>
        <Text style={mainStyles.infoTitle}>{item.title}</Text>
        <Text style={mainStyles.infoItem}>{item.desc}</Text>
      </View>
      <View style={mainStyles.timeContainer}>
        <Text style={mainStyles.timeItem}>{item.time}</Text>
      </View>
      <View style={mainStyles.avatarContainer}>
        <Image source={item.owner} style={mainStyles.avatar} />
      </View>
      <View style={mainStyles.caretContainer}>
        <Icon name="caret-down" size={20} style={mainStyles.caret} />
      </View>
    </View>
  )
}
