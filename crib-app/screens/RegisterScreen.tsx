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
        name:"",
        email:"",
        password:"",
        houseCode:"",
    }
    render(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <StyledInput type="text" placeholder="Name"  editable={true} style={styles.input}/>
            <StyledInput type="email" placeholder="Email"  editable={true} style={styles.input}/>
            <StyledInput type="text" placeholder="Username"  editable={true} style={styles.input}/>
            <StyledInput type="password" placeholder="Password"  editable={true} style={styles.input}/>
            <StyledInput type="text" placeholder="Housecode"  editable={true} style={styles.input}/>
            <StyledButton title="Register" color="green" onPress={()=>alert('registered!')} style={{width:"25%", marginTop: 20}}/>
        </View>
        );
    }
}


