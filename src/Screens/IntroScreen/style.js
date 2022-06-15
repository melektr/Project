import { Platform, StyleSheet } from 'react-native'
import { Colors } from 'config/theme'
import normalize from '../../helpers/normalize'
import Font from '../../assets/Fonts'

export const styles = StyleSheet.create({
  parent: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
    flex: 1,
    justifyContent: 'center',
    padding:normalize(20)
  },
  title:{
        fontFamily:Font.Regular,
        fontSize:normalize(20)
  }
})
