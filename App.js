/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {View, StatusBar, useColorScheme} from 'react-native';
import HomeScreen from './src/Screens/HomeScreen';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Navigator from './src/navigators';
import IntroScreen from './src/Screens/IntroScreen';
import SignInScreen from './src/Screens/SIgnInScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <Navigator/> */}
      {/* <IntroScreen /> */}
      <SignInScreen/>
      {/* <SignUpScreen /> */}
      {/* <HomeScreen/> */}
    </View>
  );
};

export default App;
