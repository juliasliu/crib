import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChoresScreen from '../screens/ChoresScreen';

import FridgeScreen from '../screens/Fridge/FridgeScreen';
import InventoryAddScreen from '../screens/Fridge/InventoryAddScreen';
import ListAddScreen from '../screens/Fridge/ListAddScreen';

import HomeScreen from '../screens/Home/HomeScreen';
import TasksScreen from '../screens/Home/TasksScreen';
import ChatScreen from '../screens/Home/ChatScreen';

import FinancesScreen from '../screens/FinancesScreen';
import ProfileScreen from '../screens/ProfileScreen';

import SignInScreen from '../screens/SignInScreen';
import RegisterScreen from '../screens/RegisterScreen';

import { BottomTabParamList, ChoresParamList, FridgeParamList } from '../types';

import HomeButton from '../components/HomeButton';

import {
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Chores"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
      tabBar={props => <MyTabBar {...props} />}>
      <BottomTab.Screen
        name="Chores"
        component={ChoresNavigator}
      />
      <BottomTab.Screen
        name="Fridge"
        component={FridgeNavigator}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
      />
      <BottomTab.Screen
        name="Finances"
        component={FinancesNavigator}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
      />
    </BottomTab.Navigator>
  );
}

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const icon =
          route.name == "Chores" ? "ios-hand" :
          route.name == "Fridge" ? "ios-restaurant" :
          route.name == "Home" ? "ios-home" :
          route.name == "Finances" ? "ios-cash" :
          route.name == "Profile" ? "ios-person" : null;

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, justifyContent: 'center' }}
            key={index}
          >
          {
            route.name == "Home" ? <HomeButton navigation={navigation} /> :
            (
              <View style={{ flexDirection: 'column', alignItems: 'center', padding: 10, }}>
                <TabBarIcon name={icon} color={isFocused ? Colors.green : Colors.gray } size={30} />
              </View>
            )
          }
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ChoresStack = createStackNavigator<ChoresParamList>();

function ChoresNavigator() {
  return (
    <ChoresStack.Navigator>
      <ChoresStack.Screen
        name="ChoresScreen"
        component={ChoresScreen}
        options={{ headerTitle: '' }}
      />
      <ChoresStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ headerTitle: 'Sign In'}}/>
      <ChoresStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerTitle: 'Register'}}/>
    </ChoresStack.Navigator>
  );
}

const FridgeStack = createStackNavigator<FridgeParamList>();

function FridgeNavigator() {
  return (
    <FridgeStack.Navigator>
      <FridgeStack.Screen
        name="FridgeScreen"
        component={FridgeScreen}
        options={{ headerTitle: 'Fridge' }}
      />
      <FridgeStack.Screen
        name="InventoryAddScreen"
        component={InventoryAddScreen}
        options={{ headerTitle: 'Fridge' }}
      />
      <FridgeStack.Screen
        name="ListAddScreen"
        component={ListAddScreen}
        options={{ headerTitle: 'Fridge' }}
      />
    </FridgeStack.Navigator>
  );
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: 'Home',
          headerRight: () => (
            <Ionicons
              size={30}
              onPress={() => alert('Take a picture!!')}
              name="ios-camera"
              color={Colors.darkGray}
              style={{paddingHorizontal: 20}}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="TasksScreen"
        component={TasksScreen}
        options={{ headerTitle: 'Tasks' }}
      />
      <HomeStack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{ headerTitle: 'Chat' }}
      />
      <HomeStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Profile',
           headerStyle: {
             backgroundColor: Colors.green,
             elevation: 0,
             shadowOpacity: 0,
             borderBottomWidth: 0,
           },
           headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
           },
       }}
      />
    </HomeStack.Navigator>
  );
}

const FinancesStack = createStackNavigator<FinancesParamList>();

function FinancesNavigator() {
  return (
    <FinancesStack.Navigator>
      <FinancesStack.Screen
        name="FinancesScreen"
        component={FinancesScreen}
        options={{ headerTitle: 'Finances' }}
      />
    </FinancesStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Profile',
           headerStyle: {
             backgroundColor: Colors.green,
             elevation: 0,
             shadowOpacity: 0,
             borderBottomWidth: 0,
           },
           headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
           },
       }}
      />
    </ProfileStack.Navigator>
  );
}
