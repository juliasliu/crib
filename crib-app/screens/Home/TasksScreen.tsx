import React, { useState } from "react";
import Icon from '@expo/vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import {
  FlatList,
  Image,
  ImageBackground,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Modal,
} from 'react-native';

import StyledInput from '../../components/StyledInput';
import StyledButton from '../../components/StyledButton';
import TaskItem from '../../components/TaskItem';

import mainStyles from '../../styles/main';
import styles from '../../styles/home';

export default class TasksScreen extends React.Component {

  state = {
      CHORES_DATA: [
        {
          id: 0,
          type: "Chore",
          title: 'Trash',
          desc: "Take out the trash.",
          time: '8 mins',
          owner: require('../../assets/images/ramen.jpg'),
          checked: false,
        },
        {
          id: 1,
          type: "Chore",
          title: 'Vacuum',
          desc: "Vacuum the living room.",
          time: '2 hours',
          owner: require('../../assets/images/ramen.jpg'),
          checked: false,
        },
        {
          id: 2,
          type: "Chore",
          title: 'Swiffer',
          desc: "Swiffer the kitchen.",
          time: '1 week',
          owner: require('../../assets/images/ramen.jpg'),
          checked: false,
        },
      ],
      SHOPPING_DATA: [
        {
          id: 3,
          type: "Shopping",
          title: 'Apples',
          desc: "1 pack",
          time: '8 mins',
          owner: require('../../assets/images/ramen.jpg'),
          checked: false,
        },
        {
          id: 4,
          type: "Shopping",
          title: 'Flour',
          desc: "1 lbs",
          time: '2 hours',
          owner: require('../../assets/images/ramen.jpg'),
          checked: false,
        },
        {
          id: 5,
          type: "Shopping",
          title: 'Milk',
          desc: "1 gallon",
          time: '1 week',
          owner: require('../../assets/images/ramen.jpg'),
          checked: false,
        },
      ],
  }

  setToggleCheckBox = (id, type) => {
    if (type === "Chore") {
      var tasks = [...this.state.CHORES_DATA];
      var task = tasks[tasks.findIndex(elem => elem.id === id)];
      task.checked = !task.checked;
      this.setState({CHORES_DATA: tasks})
    } else if (type === "Shopping") {
      var tasks = [...this.state.SHOPPING_DATA];
      var task = tasks[tasks.findIndex(elem => elem.id === id)];
      task.checked = !task.checked;
      this.setState({SHOPPING_DATA: tasks})
    }
  }

  renderTaskItem = ({item, type}) => (
    <TaskItem item={item} toggleChecked={this.setToggleCheckBox.bind(this)} />
  )

  render() {
    return (
      <ScrollView style={[mainStyles.scroll, mainStyles.container]}>
        <View style={[mainStyles.contentContainer]}>
          <Text style={mainStyles.title}>Tasks</Text>
          <Text style={mainStyles.subtitle}>Earn points by completing tasks on time. Nudge your housemates if a task is idle!</Text>
        </View>

        <View style={mainStyles.listContainer}>
          <View style={mainStyles.listHeader}>
            <Text style={[mainStyles.listTitle]}>Chores</Text>
            <StyledButton title="Add" size="sm" color="orange" icon="plus" onPress={() => console.log("Add new hcore")} />
          </View>
          <FlatList
            data={this.state.CHORES_DATA}
            numColumns={1}
            renderItem={this.renderTaskItem.bind(this)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View style={mainStyles.listContainer}>
          <View style={mainStyles.listHeader}>
            <Text style={[mainStyles.listTitle]}>Shopping List</Text>
            <StyledButton title="Add" size="sm" color="orange" icon="plus" onPress={() => console.log("Add new hcore")} />
          </View>
          <FlatList
            data={this.state.SHOPPING_DATA}
            numColumns={1}
            renderItem={this.renderTaskItem.bind(this)}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

      </ScrollView>
    );
  }
}
