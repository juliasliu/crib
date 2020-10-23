import * as React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';

import { FlatList} from 'react-native-gesture-handler';

import EditScreenInfo from '../../components/EditScreenInfo';
import {} from '../../components/Themed';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';



export default function TabTwoScreen({ navigation }) {
  const renderInvItem = ({ item }) => (
    <InvItem name={item.name} exp_date={item.exp_date} quantity={item.quantity} units={item.units}/>
  );

  const renderListItem = ({ item }) => (
    <ListItem name={item.name} requester={item.requester} quantity={item.quantity} units={item.units}/>
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.sectionTitleContainer}>
        <Text style={styles.title}>Inventory</Text>
        <TouchableOpacity
        style={styles.addItemButton}
        onPress={() => navigation.navigate('InventoryAddScreen')}
      >
          <Text style ={styles.addItemButtonText}>+</Text>
      </TouchableOpacity>
      </View>
      <FlatList 
        style={styles.flatList}
        data={INV_DATA}
        renderItem={renderInvItem}
        keyExtractor={(item)=>item.name}
      />


      <View style={styles.sectionTitleContainer}>
        <Text style={styles.title}>Shopping List</Text>
        <TouchableOpacity
        style={styles.addItemButton}
        onPress={() => navigation.navigate('ListAddScreen')}
      >
          <Text style ={styles.addItemButtonText}>+</Text>
      </TouchableOpacity>
      </View>      
      <FlatList
        style={styles.flatList}   
        data={LIST_DATA}
        renderItem={renderListItem}
        keyExtractor={(item)=>item.name}
      />

    </View>
    
  );
}

const InvItem = ({ name, exp_date, quantity, units }) => (
  <View style={styles.item}>
    <View style={styles.itemLabel}>
      <Text style={styles.itemLabelText}>{name}</Text>
      <Text style={styles.expDateText}>Expires in {exp_date}</Text>
    </View>
    <View style={styles.quantityContainer}>
      <TouchableOpacity
        style={styles.minusButton}
        onPress={() =>console.log("Quantity of " + name + "in inventory reduced by 1")}
      >
          <Text style ={styles.quantityButtonText}>-</Text>
      </TouchableOpacity>
      <View style={styles.quantityTextContainer}>
        <Text style={styles.quantityText}>{quantity}</Text>
        <Text style={styles.unitText}>{units}</Text>
      </View>
      <TouchableOpacity
        style={styles.plusButton}
        onPress={() =>console.log("Quantity of " + name + "in inventory reduced by 1")}
      >
          <Text style ={styles.quantityButtonText}>+</Text>
      </TouchableOpacity>
    </View>

  </View>
);

const ListItem = ({ name, requester, quantity, units}) => (
  <View style={styles.item}>
    <View style={styles.itemLabel}>
      <Text style={styles.itemLabelText}>{name}</Text>
      <Text style={styles.expDateText}>Requested by {requester}</Text>
    </View>
    <View style={styles.quantityContainer}>
      <TouchableOpacity
        style={styles.minusButton}
        onPress={() =>console.log("Quantity of " + name + "in Shopping List reduced by 1")}
      >
          <Text style ={styles.quantityButtonText}>-</Text>
      </TouchableOpacity>
      <View style={styles.quantityTextContainer}>
        <Text style={styles.quantityText}>{quantity}</Text>
        <Text style={styles.unitText}>{units}</Text>
      </View>
      <TouchableOpacity
        style={styles.plusButton}
        onPress={() =>console.log("Quantity of " + name + "in Shopping List reduced by 1")}
      >
          <Text style ={styles.quantityButtonText}>+</Text>
      </TouchableOpacity>
    </View>

  </View>

);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.green,
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  flatList: {
    borderRadius: Layout.borderRadius,
    alignSelf: "stretch",
    backgroundColor: 'white',
    marginHorizontal: 10
  },
  
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    margin: 20,
    flex: 3,
  },
  separator: {
    marginTop: 20,
    height: 1,
    width: '80%',
  },
  item: {
    marginHorizontal: 10,
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 100,
    flex: 1,
    borderColor: Colors.lightGray,
    borderBottomWidth: 1,
  },

  itemLabel: {
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flex:1,
    textAlign: 'left',
  },

  sectionTitleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    },

  addItemButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.gray,
    alignSelf: 'stretch',
    borderRadius: Layout.borderRadius,
    margin: 10,
  },
  
  addItemButtonText: {
    flex: 1,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    textShadowColor:'black',
    textShadowRadius:1,
    
  },

  quantityContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flex:1,
    borderWidth: 1,
    borderRadius: Layout.borderRadius,
    borderColor: Colors.gray,
    marginVertical: 15,
  },

  itemLabelText: {
    color: Colors.green,
    fontSize: 25,
    fontWeight: 'bold',
  },

  quantityTextContainer: {
    flex:1,
  },

  quantityText: {
    color: Colors.green,
    fontSize: 25,
    fontWeight: 'bold',
    flex:3,
    textAlign: 'center',
    justifyContent: 'flex-end',
  },

  unitText: {
    color: Colors.green,
    fontSize: 15,
    fontWeight: 'bold',
    flex:2,
    textAlign: 'center',
  },

  expDateText: {
    paddingLeft: 10,
    textAlign: 'left',
    fontSize: 13.5,
    color: 'grey'
  },

  minusButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.gray,
    alignSelf: 'stretch',
    borderTopLeftRadius: Layout.borderRadius,
    borderBottomLeftRadius: Layout.borderRadius

  },

  plusButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.gray,
    alignSelf: 'stretch',
    borderTopRightRadius: Layout.borderRadius,
    borderBottomRightRadius: Layout.borderRadius
  },

  quantityButtonText: {
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    textShadowColor:'black',
    textShadowRadius:1,
  },


});

const INV_DATA = [
  {
    name: "Apples",
    exp_date: "1 days",
    quantity: 2,
    units: 'pcs'

  },
  {
    name: "Eggs",
    exp_date: "2 day",
    quantity: 2,
    units: 'dzn'

  },
  {
    name: "Milk",
    exp_date: "4 days",
    quantity: 3,
    units: 'gal'


  }

]

  const LIST_DATA = [
    {
      name: "Crushed Tomatoes",
      requester: "Julia",
      quantity: 2,
      units: 'can'

  
    },
    {
      name: "Flour",
      requester: "Robin",
      quantity: 1,
      units: 'lbs'
    },
    {
      name: "Soda",
      requester: "Richard",
      quantity: 3,
      units: 'btl'
  
    }


]
