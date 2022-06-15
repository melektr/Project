import {StyleSheet, Text, View} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    height: 150,
    width: 350,
    backgroundColor: 'aliceblue',
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: 'darkcyan',
    flexDirection: 'row',
    marginVertical:10
  },
  imgContainer: {
    width: '50%',
    height: '100%',
  },

  imgstyle: {
    // margin: 10,
    alignSelf: 'flex-start',
    backgroundColor: 'red',
    width: '80%',
    height: '80%',
    marginVertical: 15,
    marginLeft: 10,
  },
  productTitle: {
    marginTop: 15,
    fontSize: 13,
    fontWeight: '300',
  },
  priceStyle:{
    marginRight:5,
    fontSize: 10,
    fontWeight:'bold'
  },
  oldPriceStyle:{
    textDecorationLine:'line-through',
    fontSize: 10,
    // fontWeight:'bold',
    
    
  },
  ratingView:{
    flexDirection:'row'
  },
  priceContainer:{
    marginTop:5,
    flexDirection:'row'
  }
});
