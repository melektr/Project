import React from 'react';
import {Text, View, Image} from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductItem = ({img, title, price, oldPrice, avgRating}) => {
  return (
    <View style={style.container}>
      <View style={style.imgContainer}>
        <Image source={{uri: img}} style={style.imgstyle}></Image>
      </View>
      <View style={style.imgContainer}>
        <Text style={style.productTitle}>{title}</Text>
        <View style={style.ratingView}>
          {[0, 0, 0, 0, 0].map((el, i) => 
            <Icon
              name={i < Math.floor(avgRating) ? 'star' : 'star-o'}
              color="#e47911"
            />
          )}
        </View>
        <View style={style.priceContainer}>
          <Text style={style.priceStyle}>From ${price}</Text>
          <Text style={style.oldPriceStyle}>${oldPrice}</Text>
        </View>
      </View>
    </View>
  );
};
export default ProductItem;
