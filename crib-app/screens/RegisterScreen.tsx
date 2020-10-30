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
import mainStyles from '../styles/main';
import Colors from '../constants/Colors'
import { TextInput } from 'react-native-gesture-handler';
import { Input } from 'react-native-elements';

export default class App extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
        houseCode: "",
    }

    render() {
      return (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={[mainStyles.container, styles.container]}>
              <View style={[styles.landingContainer]}>
                <Text style={[styles.title, {color: Colors.orange, marginVertical: 20}]}>Register</Text>

                <StyledInput type="text" color="orange" label="Username" icon="at" placeholder="Please enter your unique username" description="This is how your housemates can find you. You can change this later."/>
                <StyledInput type="text" color="orange" label="Name" icon="user" placeholder="Please enter your full name"/>
                <StyledInput type="text" color="orange" label="Email" icon="envelope" placeholder="Please enter a valid email address"/>
                <StyledInput type="password" color="orange" label="Password" icon="lock" placeholder="Please create a unique password"/>
                <StyledInput type="text" color="orange" label="House code" icon="hashtag" placeholder="You can enter a house code here" description="If you are the first user to create an account for your house, leave this blank."/>

                <StyledButton title="Register" color="orange" onPress={()=>alert('registered!')} style={{marginVertical: 10}}/>
                <StyledButton title="Back" color="white" onPress={()=>this.props.navigation.navigate('Landing')} style={{marginVertical: 10}}/>
              </View>
            </View>
          </ScrollView>
      );
    }
}
