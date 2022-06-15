import React, {useState}from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './style';
import {DATA} from './constants';
import CustomInput from '../../Components/CustomInput';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useForm, Controller} from 'react-hook-form'
import { InputsForm } from './constants';
import normalize from '../../helpers/normalize';


const SignInScreen = ({navigation}) => {

  const {control, handleSubmit,errors} = useForm()
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordShown, setPasswordShown] = useState(true)

  const setPlaceholder = id => {
    switch (id) {
      case 1:
        return 'Enter Email';
        break;
      case 2:
        return 'Enter Password';
        break;
    }
  };

  const renderFormItem= item =>{
    return (
      <Controller
      name={item.title}
      control={control}
      rules={item.rules}
      render={props=>(
        <CustomInput
        textContentType={item.textContentType}
        keyboardType={item.keyboardType}
        secureTextEntry={
          item.id == 2 ? passwordShown : item.secureTextEntry
        }
        placeholder={setPlaceholder(item.id)}
        iconName={item.iconName}
        rightIcon={
          item.id == 2 &&
          (passwordShown ? 'eye' : 'eye-off')
        }
        sizeRightIcon={normalize(24)}
        onPressRightIcon={() => setPasswordShown(!passwordShown)}
         />
      )}
      />

    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text> </Text>
      {InputsForm.map(item => {
            return renderFormItem(item);
          })}
      <TouchableOpacity style={styles.connectBtn} onPress={()=>navigation.navigate('Home')}>
        <Text style={styles.btnText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subscribeBtn} onPress={()=>navigation.navigate('SignUp')}>
        <Text style={styles.btnText}>S'inscrire</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default SignInScreen;
