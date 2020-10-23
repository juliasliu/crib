import * as React from 'react';
import { StyleSheet, Button, TouchableOpacity} from 'react-native';

import { FlatList} from 'react-native-gesture-handler';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View  } from '../components/Themed';

export default function TabTwoScreen() {
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
        onPress={() =>console.log("Quantity of " + name + "in inventory reduced by 1")}
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
        onPress={() =>console.log("Quantity of " + name + "in inventory reduced by 1")}
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
    backgroundColor: '#1cad61',
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  flatList: {
    borderRadius: 10,
    alignSelf: "stretch",
    backgroundColor: '#FFF',
    elevation: 100,
  },
  
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 20,
    flex: 3,
  },
  separator: {
    marginTop: 20,
    height: 1,
    width: '80%',
  },
  item: {
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 100,
    flex: 1,
    borderColor: '#f1f1f1',
    borderBottomWidth: 1,
  },

  itemLabel: {
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flex:1,
    textAlign: 'left',
    backgroundColor: '#FFF',

  },

  sectionTitleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    },

  addItemButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    alignSelf: 'stretch',
    borderRadius: 10,
    margin: 10,
  },
  
  addItemButtonText: {
    flex: 1,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    textShadowColor:'black',
    textShadowRadius:1,
  },

  quantityContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flex:1,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#DDDDDD",
    marginVertical: 15,
  },

  itemLabelText: {
    color: '#1cad61',
    fontSize: 25,
    fontWeight: 'bold',
  },

  quantityTextContainer: {
    flex:1,
    backgroundColor: '#FFF',
  },

  quantityText: {
    color: '#1cad61',
    fontSize: 25,
    fontWeight: 'bold',
    flex:3,
    textAlign: 'center',
    justifyContent: 'flex-end',
  },

  unitText: {
    color: '#1cad61',
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
    backgroundColor: "#DDDDDD",
    alignSelf: 'stretch',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10

  },

  plusButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    alignSelf: 'stretch',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },

  quantityButtonText: {
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
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
