import * as React from 'react';

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import mainStyles from '../styles/main';
import Colors from '../constants/Colors';

import StyledButton from '../components/StyledButton'

interface Props {
  onTextPress: any
  item: any
  pic: any
  net:any
}
let TEST_DATA =  [{
  name: 'Kobe',
  requested: false,
  transaction: "5.00"
},
{
  name: 'Robin',
  requested: false,
  transaction: "5.00"
},
{
  name: 'Julia',
  requested: true,
  transaction: "5.00"
},]
class FinancesListItem extends React.Component<Props, {collapse:boolean}> {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true
    };
  }
  handlePress = () => {
    alert('pressed!')
  };

  handleTextPress = () => {
    this.setState({collapse: !this.state.collapse})
  };

  render() {
    return (
      <View style={styles.financeItemContainer}>         
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.itemContainer}
          onPress={this.handleTextPress}
        >

        <View style={mainStyles.iconContainer}>
          <Image
            style={styles.iconContainer}
            source={this.props.pic}
          />
        </View>
        <View style={[mainStyles.infoContainer]}>
          <Text style={styles.itemTitle}>{this.props.item.name}</Text>
          <Text style={styles.itemStyle}>Net owed: 
          {
            this.props.item.net >= 0 ?
              
              <Text style={[styles.itemStyle, {color:'green'}]}> ${this.props.item.net} </Text>
            : 
              <Text style={[styles.itemStyle, {color:'red'}]}> -${-1*this.props.item.net}</Text>
          }
          </Text>
          
        </View>
        <View style={[mainStyles.timeContainer, {flexDirection:'column',marginRight:5,paddingTop:0,paddingBottom:0}]}>
              <StyledButton title="Pay" color="green" onPress={this.handlePress} style={styles.markButton}/>
              <StyledButton title="Request" color="orange" onPress={this.handlePress} style={styles.markButton}/>
        </View>
        
        </TouchableOpacity>
          {
            !this.state.collapse ? 
            <View style={styles.textContainer}>
              <FlatList
                data={TEST_DATA}
                keyExtractor={(item, index) => index.toString()}
                renderItem = {({ item }) => (
                  <View style={styles.entryContainer}>
                    <View style={styles.infoContainer}>
                      {
                        item.requested ?
                        <Text style={styles.entryStyle}>Requested</Text>
                        :
                        <Text style={styles.entryStyle}>Paid you</Text>
                      }
                      
                    </View>
                    <View style={styles.timeContainer}>
                      {
                        item.requested ?
                        <Text style={styles.reqStyle}>-$ {item.transaction}</Text>
                        :
                        <Text style={styles.paidStyle}>+$ {item.transaction}</Text>
                      }
                      
                    </View>
                  </View>
                )}
              />
            </View>
              : null
          }
      </View>
      );
    };
  }
  
  export default FinancesListItem;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 1,
      height: 30
    },
    financeItemContainer: {
      flex: 1,
      borderColor: Colors.veryLightGray,
      borderBottomWidth: 0,
      paddingHorizontal: 20,
    },

    itemContainer: {
      flex: 1,
      borderRadius: 10,
      flexDirection: 'row',
      padding: 10,
      marginVertical: 10,
      backgroundColor: Colors.white,
      shadowColor: Colors.veryLightGray,
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 1,
      shadowRadius: 0,
      elevation: 8,
    },

    touchableHighlight:{
      paddingLeft:10,
      borderRadius:20,
    },

    listRow: {
      flexDirection: 'row',
      marginLeft: 0,
      marginRight: 0,
      paddingTop: 10,
      paddingBottom: 10,
    },
    textContainer: {
      flex: 1,
      paddingLeft: 5,
    },
    markButton: {
      flex:0, //fix??? hard coded button width
      width:100,
      marginBottom:10,
      borderRadius: 10, //how rounded it is
      paddingVertical: 5,
      paddingHorizontal: 0,
      alignItems:'center',
    },

    itemStyle: {
      color: Colors.gray,
      fontSize: 14,
    },
    itemTitle: {
      color: '#1cad61',
      fontSize: 25,
      fontWeight: 'bold',
      marginLeft:0,
     },
    iconContainer: { //Can be used as a view conatiner or styling the image itself
      alignItems: 'center',
      borderColor: Colors.green,
      borderRadius: 10,
      borderWidth: 1,
      justifyContent: 'center',
      height: 50,
      width: 50
    },


    entryContainer: {
      flex: 1,
      flexDirection:'row',
      borderBottomWidth: 1,
      borderColor: '#f1f1f1',
      paddingLeft: 5,
    },

    infoContainer: {
      flex: 1,
      paddingLeft: 0,
      paddingRight: 0,
      flexDirection: "column",
      },
    
    timeContainer: {
      flex:1,
      paddingLeft: 5,
      paddingRight: 5,
      flexDirection: "column",
      alignItems: "baseline",
      justifyContent: "flex-end"
    },


    entryStyle: {
      fontSize: 18,
      alignItems: 'flex-start',
    },
    reqStyle: {
      fontSize: 18,
      color: 'red',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    paidStyle: {
      fontSize: 18,
      color: 'green',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
  
  });