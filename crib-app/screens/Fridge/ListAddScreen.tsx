import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity,  Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from '../../styles/fridgeAdd';
import mainStyles from '../../styles/main'
import StyledButton from '../../components/StyledButton'
import StyledInput from '../../components/StyledInput'
import Colors from '../../constants/Colors'


export default function InventoryAddScreen({ navigation }) {
    const [name, setName] = React.useState('');
    const [owner, setOwner] = React.useState('');
    const [quantity, setQuantity] = React.useState('');
    const [unit, setUnit] = React.useState('');
    const [expiration, setExpiration] = React.useState('');

    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
        <View style = {{flex:0.1, backgroundColor:Colors.green, alignSelf:'stretch', marginBottom:20, alignItems:'flex-start', paddingTop:20}}>
            <Text style={styles.titleText}>Add Item to Shopping List</Text>
        </View> 
        <View style = {[styles.container,{flex:0.8}]}>
        <View style={styles.rowContainer}>
            <View style={[styles.fieldContainer, {padding: 20}]}>
                <StyledInput type="text" icon = "plus" label="Item" value = "add item" />
            </View>
        </View>
        <View style={styles.rowContainer}>
            <View style={[styles.fieldContainer, {padding: 20}]}>
                <StyledInput type="text" icon = "users" label="Owner" value = "select owner" />
            </View>

        </View>
        <View style={styles.rowContainer}>
            <View style={[styles.fieldContainer, {paddingEnd: 10}]}>
                <StyledInput type="text" label="Quantity" value = "0" />
            </View>
            <View style={[styles.fieldContainer, {paddingStart: 10}]}>
                <StyledInput type="text" label="Units" value = "set unit abbreviation" />
            </View>
            
        </View>
            <StyledButton title="Add Item" color="orange" onPress={()=>alert('item added')} size="lg" />
        </View>

    </KeyboardAvoidingView>
  );
}

