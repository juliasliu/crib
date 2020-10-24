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
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Colors from '../constants/Colors';

export default function StyledInput({ type, label, value, placeholder, size, style }) {

  const handleText = () => {

  }
  const handleEmail = () => {

  }
  const handlePassword = () => {

  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>
        {label}
      </Text>
      {
        type === "text" ? (
          <TextInput style = {[styles.input, style]}
             underlineColorAndroid = "transparent"
             value = {value}
             placeholder = {placeholder}
             autoCapitalize = "none"
             onFocus = {handleText}
             onChangeText = {handleText}/>
        ) : type === "email" ? (
          <TextInput style = {[styles.input, style]}
             underlineColorAndroid = "transparent"
             value = {value}
             placeholder = {placeholder}
             autoCapitalize = "none"
             onChangeText = {handleEmail}/>
        ) : type === "password" ? (
          <TextInput style = {[styles.input, style]}
             underlineColorAndroid = "transparent"
             value = {value}
             placeholder = {placeholder}
             autoCapitalize = "none"
             onChangeText = {handlePassword}/>
        ) : null
      }
   </View>
  );
}

const styles = StyleSheet.create({
  // ...
  inputContainer: {
    marginVertical: 10,
  },
  inputLabel: {
    color: Colors.green,
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    marginTop: 10,
    height: 40,
    borderColor: Colors.lightGray,
    borderBottomWidth: 2,
    fontSize: 16,
  },
});
