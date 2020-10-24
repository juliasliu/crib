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

import StyledInput from '../../components/StyledInput';
import StyledButton from '../../components/StyledButton';

import mainStyles from '../../styles/main';
import styles from '../../styles/home';

export default function InviteScreen() {
  return (
    <ScrollView style={[mainStyles.scroll, mainStyles.container]}>
      <Text style={mainStyles.title}>Invite User to Household</Text>
      <Text style={mainStyles.subtitle}>Grow your house by inviting new members!</Text>

      <StyledInput type="text" label="House code" value="12345" icon="hashtag" placeholder="Send user your house code" editable={false} />
      <StyledInput type="text" label="Username" icon="search" placeholder="Invite user by username: @" />
      <StyledButton title="Add User" color="green" icon="plus" onPress={() => console.log("hi")} style={{marginTop: 20}}/>
    </ScrollView>
  );
}
