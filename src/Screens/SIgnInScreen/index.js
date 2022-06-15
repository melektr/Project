import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './style';
import {DATA} from './constants';
import CustomInput from '../../Components/CustomInput';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SignInScreen = ({navigation}) => {
  // const navigation = useNavigation(); 
  return (
    <SafeAreaView style={styles.container}>
      <Text> </Text>
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
      <TouchableOpacity style={styles.connectBtn}>
        <Text style={styles.btnText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subscribeBtn} onPress={()=>navigation.navigate('SignUp')}>
        <Text style={styles.btnText}>S'inscrire</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default SignInScreen;
