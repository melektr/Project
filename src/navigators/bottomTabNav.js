import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import ProductScreen from '../Screens/ProductScreen';
import Entypo from "react-native-vector-icons"
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={HomeScreen}
        name={'Home'}
        options={{tabBarShowLabel: false, tabBarIconStyle:({color})=>(<Entypo name='home' color={color} size='19' />)}}
      />
      <Tab.Screen component={ProductScreen} name={'ProductScreen'} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
