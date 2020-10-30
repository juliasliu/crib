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

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import StyledButton from '../components/StyledButton'
import StyledInput from '../components/StyledInput'
import styles from '../styles/landing';
import Colors from '../constants/Colors'
import { TextInput } from 'react-native-gesture-handler';
import mainStyles from '../styles/main';


export default class App extends React.Component {
    state={
        email:"",
        password:"",
    }
    render(){
      return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[mainStyles.container, styles.container]}>
            <View style={[styles.landingContainer]}>
              <Text style={[styles.title, {marginVertical: 20}]}>Sign In</Text>

              <StyledInput type="text" label="Email" icon="envelope" placeholder="Please enter your email address"/>
              <StyledInput type="password" label="Password" icon="lock" placeholder="Please enter your password"/>

              <StyledButton title="Sign In" color="green" onPress={()=>alert('registered!')} style={{marginVertical: 10}}/>
              <StyledButton title="Back" color="white" onPress={()=>this.props.navigation.navigate('Landing')} style={{marginVertical: 10}}/>

            </View>
        </View>
      </ScrollView>
      );
    }
}
