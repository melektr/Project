import React from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import normalize from '../../helpers/normalize'

import style from './style';

const CustomInput = ({
  containerStyle,
  textInputStyle,
  iconContainerStyle,
  value,
  onSubmitEditing,
  onChangeText,
  inputRef,
  placeholder,
  iconName,
  iconSize,
  leftIconName,
  leftIconContainerStyle,
  error,
  onFocus,
  onBlur,
  isFocused,
  onFocusedItem,
  textContentType,
  secureTextEntry,
  keyboardType,
  returnKeyType,
  defaultValue,
  maxLength,
  multiline,
  numberOfLines,
  imgName,
  rightIcon,
  sizeRightIcon,
  onPressRightIcon,
  iconType,
  iconColor,
  TextColor}) => {
  return (
    <View style={style.textInputContainer}>
      <View style={style.container}>
        <Icon name={iconName} size={25} color="darkcyan" />
        <TextInput
          textContentType={textContentType}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          style={style.textInput}
          value={value}
          ref={inputRef}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          onFocus={onFocus}
          multiline={multiline}
          numberOfLines={numberOfLines}
          onBlur={onBlur}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
          rightIcon={rightIcon}></TextInput>
            {rightIcon && <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{ width: (sizeRightIcon + 20), height: (30),  alignItems: 'center', justifyContent: 'center' }}
                    onPress={onPressRightIcon}>
                    <Icon
                        name={rightIcon}
                        size={sizeRightIcon}
                        color={iconColor ? iconColor : "darkcyan"}
                        type={iconType}
                    />
                </TouchableOpacity>
            </View>}
      </View>
      <View style={style.underLineView} />
    </View>
  );
};
export default CustomInput;
