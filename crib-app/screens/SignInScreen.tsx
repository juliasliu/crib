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
            
            <View style={styles.input}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email"
                    placeholderTextColor="#white"
                    onChangeText={text => this.setState({email:text})}/>
            </View>
            <View style={styles.input}>
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Pasword"
                    placeholderTextColor="#white"
                    onChangeText={text => this.setState({password:text})}/>
            </View>
            
            <View style = {styles.button}>
            <TouchableOpacity 
                style={styles.registerButton} 
                onPress={()=>alert("signed in")}>          
                <Text style = {styles.textReg}>Sign In</Text>
            </TouchableOpacity>
            </View>
        </View>
        );
    }
}


