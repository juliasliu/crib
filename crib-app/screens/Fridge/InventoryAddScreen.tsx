import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity,  Text, View, KeyboardAvoidingView, Platform } from 'react-native';

import styles from '../../styles/fridgeAdd';


export default function InventoryAddScreen({ navigation }) {
    const [name, setName] = React.useState('');
    const [owner, setOwner] = React.useState('');
    const [quantity, setQuantity] = React.useState('');
    const [unit, setUnit] = React.useState('');
    const [expiration, setExpiration] = React.useState('');

    return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Add Item to Inventory</Text>
        </View>
        <View style={styles.rowContainer}>
            <View style={styles.fieldContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>Item Name</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.nameInput}
                        placeholder="Add Item Name"
                        placeholderTextColor="gray"
                        onChangeText={name => setName(name)}
                        defaultValue={name}
                    />
                </View>

            </View>
            <View style={styles.fieldContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.ownerText}>Owner</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.ownerInput}
                        placeholder="Add Owner"
                        placeholderTextColor="gray"
                        onChangeText={owner => setOwner(owner)}
                        defaultValue={owner}
                    />
                </View>

            </View>
        </View>
        <View style={styles.rowContainer}>
            <View style={styles.fieldContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.quantityText}>Quantity</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.quantityInput}
                        placeholder="0"
                        keyboardType='decimal-pad'
                        placeholderTextColor="gray"
                        onChangeText={quantity => setQuantity(quantity)}
                        defaultValue={quantity}
                    />
                </View>

            </View>
            <View style={styles.fieldContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.unitText}>Units</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.unitInput}
                        placeholder="Set Unit Abbreviation"
                        placeholderTextColor="gray"
                        onChangeText={unit => setUnit(unit)}
                        defaultValue={unit}
                    />
                </View>

            </View>
        </View>
        <View style={styles.fieldContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.expirationText}>Expiration Date</Text>
            </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.expirationInput}
                        placeholder="Add Expiration Date"
                        placeholderTextColor="gray"
                        onChangeText={expiration => setExpiration(expiration)}
                        defaultValue={expiration}
                    />
                </View>

        </View>
        <View style={styles.rowContainer}>
            <TouchableOpacity
                style={styles.returnButton}
                onPress={() => navigation.navigate('FridgeScreen')}
                >
                    <Text style ={styles.returnButtonText}>Add to Fridge</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  );
}

