import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './style';

import {DATA} from './constants';
import CustomInput from '../../Components/CustomInput';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Image source={require('Users/Melek/Desktop/PFA/src/assets/Images')}/> */}
      {DATA.map(item => {
        return (
          <CustomInput
            placeholer={item.placeholder}
            secure={item.secure}
            icon={item.icon}
            rightIcon={item.rightIcon}
          />
        );
      })}
      <TouchableOpacity style={styles.subscribeBtn}>
        <Text style={styles.btnText}>S'inscrire</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.connectBtn} >
        <Text style={styles.CnctBtnText}>Se connecter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default SignUpScreen;
