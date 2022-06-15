/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {View, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SignInScreen from './src/Screens/SIgnInScreen'
import SignUpScreen from './src/Screens/SignUpScreen'
import HomeScreen from './src/Screens/HomeScreen'
import IntroScreen from './src/Screens/IntroScreen';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen component={SignInScreen} name={'SignIn'}/>
        <Stack.Screen component={SignUpScreen} name={'SignUp'}/>
        <Stack.Screen component={HomeScreen} name ={"Home"}/>
        <Stack.Screen component={IntroScreen} name={'Intro'} />
      </Stack.Navigator>

    </NavigationContainer>
    </View>
  );
};

export default App;
