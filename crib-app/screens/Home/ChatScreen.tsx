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
  KeyboardAvoidingView,
  Dimensions,
  TextInput,
} from 'react-native';

import StyledInput from '../../components/StyledInput';
import StyledButton from '../../components/StyledButton';
import ChatMessage from '../../components/ChatMessage';

import mainStyles from '../../styles/main';
import styles from '../../styles/chat';

export default class ChatScreen extends React.Component {

  state = {
    message: "",
      messages: [
        {
          text: "Take out the trash.",
          user: {avatar: require('../../assets/images/girl.jpg')},
          floatRight: true,
        },
        {
          text: "Vacuum the living room.",
          user: {avatar: require('../../assets/images/nature.jpg')},
          floatRight: false,
        },
        {
          text: "Swiffer the kitchen.",
          user: {avatar: require('../../assets/images/girl.jpg')},
          floatRight: true,
        },
      ],
  }

  setMessage(message) {
		this.setState({message})
	}

  render() {

    let messageArray = this.state.messages.map(( item, key ) => {
      return item != undefined && (
        <ChatMessage
					navigation={this.props.navigation}
					message={item}
					user={item.user}
					floatRight={item.floatRight}
					key={key} />
        )
    })


    return (
      <View style={[mainStyles.scroll, mainStyles.container]}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={
              Dimensions.get('window').height >= 896 ? 85 : 65
          }
          style={styles.chatContainer}>
            <View style={styles.chatMessagesContainer}>
              <ScrollView
              ref={ref => {
                this.scrollview_ref = ref;
              }}
                showsVerticalScrollIndicator={false}
              onLayout={event => {
                this.scrollview_ref.scrollToEnd({animated: true})
              }}>
                {
                    messageArray
                }
              </ScrollView>
            </View>
            <View style={styles.chatBottomContainer}>
              <View style={[styles.chatInputContainer]}>
                <View style={[ mainStyles.input, styles.chatInput ]}>
                    <TextInput
                    ref="message"
                    style={[ mainStyles.inputText ]}
                    placeholder={'Send a message to your housemates...'}
                    placeholderTextColor={'#8393a8'}
                    underlineColorAndroid={'#fff'}
                    autoCapitalize='none'
                    autoCorrect={false}
                    autoFocus={true}
                    returnKeyType='send'
                    value={ this.state.message }
                    onChangeText={(keyword) => this.setMessage(keyword)}
                    onSubmitEditing={() => console.log("messagey")}
                      />
                  </View>
                    <View style={[styles.chatInputIconContainer]}>
                    <StyledButton size="sm" color="orange" icon="send" onPress={() => console.log("messagey")} style={styles.chatInputIconButton} />
                  </View>
                </View>
            </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
