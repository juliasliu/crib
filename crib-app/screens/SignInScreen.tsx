import * as React from 'react';
import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Button,
  StatusBar,
  Image,
  ScrollView
} from 'react-native';
import { observer, inject } from 'mobx-react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import StyledButton from '../components/StyledButton'
import StyledInput from '../components/StyledInput'
import styles from '../styles/landing';
import Colors from '../constants/Colors'
import { TextInput } from 'react-native-gesture-handler';
import mainStyles from '../styles/main';

@inject('users') @observer
export default class App extends React.Component {
    state = {
        email: "",
        password: "",
    }

    signIn = () => {
      this.props.users.login(null, this.state.email, this.state.password)
      .then(res => {
  			console.log("yay signed in! " + res)
  		})
  		.catch((errors) => {
  			console.log("o no " + errors)
  		})
    }

    updateEmail = (email) => {
      this.setState({email});
    }
    updatePassword = (password) => {
      this.setState({password});
    }

    render() {
      return (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={[mainStyles.container, styles.container]}>
            <View style={[styles.landingContainer]}>
              <Text style={[styles.title, {marginVertical: 20}]}>Sign In</Text>

              <StyledInput type="text" label="Email" icon="envelope" handleValue={this.updateEmail.bind(this)} placeholder="Please enter your email address"/>
              <StyledInput type="password" label="Password" icon="lock" handleValue={this.updatePassword.bind(this)} placeholder="Please enter your password"/>

              <StyledButton title="Sign In" color="green" onPress={this.signIn.bind(this)} style={{marginVertical: 10}}/>
              <StyledButton title="Back" color="white" onPress={()=>this.props.navigation.navigate('Landing')} style={{marginVertical: 10}}/>

            </View>
        </View>
      </KeyboardAwareScrollView>
      );
    }
}
