import * as React from 'react';
import {
  TouchableOpacity, 
  Dimensions,
  StyleSheet,
  Button,
  StatusBar,
  Image
} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import StyledButton from '../components/StyledButton'
import StyledInput from '../components/StyledInput'
import styles from '../styles/landing';
import Colors from '../constants/Colors'
import { TextInput } from 'react-native-gesture-handler';


export default class App extends React.Component{
    state={
        email:"",
        password:"",
    }
    render(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <StyledInput type="email" placeholder="Email"  editable={true} style={styles.input}/>
            <StyledInput type="password" placeholder="Password"  editable={true} style={styles.input}/>
            <StyledButton title="Sign In" color="green" onPress={()=>alert('signed in')} style={{width:"25%", marginTop: 20}}/>
        </View>
        );
    }
}


