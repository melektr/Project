import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';


import style from './style';

const CustomInput = ({placeholer, secure, icon, rightIcon}) => {
  return (
    <View style={style.textInputContainer}>
      <View style={style.container}>
        <Icon name={icon} size={25} color="darkcyan" />
        <TextInput
          placeholder={placeholer}
          secureTextEntry={secure}
          style={style.textInput}

          rightIcon={rightIcon}></TextInput>
        {rightIcon && <Icon name="eye" size={25} color="grey" style={{alignSelf:'flex-end'}}/>}
      </View>
      <View style={style.underLineView} />
    </View>
  );
};
export default CustomInput;
