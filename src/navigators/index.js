import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import BottomTabNavigator from './bottomTabNav';
import SignInScreen from '../Screens/SIgnInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen component={BottomTabNavigator} name={'HomeTabs'} /> */}
        <Stack.Screen component={SignInScreen} name={'SignIn'}/>
        <Stack.Screen component={SignUpScreen} name={'SignUp'}/>
      </Stack.Navigator>
      {/* <HomeScreen /> */}
    </NavigationContainer>
  );
};

export default Navigator;
