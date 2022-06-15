import {StyleSheet, Text, View} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'floralwhite',
    paddingTop: 50,
    justifyContent: 'center',
    //  alignItems:'center'
  },
  subscribeBtn: {
    height: 60,
    marginHorizontal: 20,
    borderColor: 'darkcyan',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // position:'absolute',
    // bottom:0
    marginTop: 50,
  },
  connectBtn: {
    marginTop: 100,
    alignSelf: 'center',
  },
  CnctBtnText: {
      fontSize:15,
      fontWeight:"300",
      textDecorationLine:'underline'
  },
  btnText: {
    fontSize: 18,
    fontWeight: '300',
  },
});

export default styles;
