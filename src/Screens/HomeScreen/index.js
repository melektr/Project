import React from 'react';
import {Text, View, ScrollView, FlatList} from 'react-native';
import ProductItem from '../../Components/ProductItem';
import styles from './style';
import products from '../../data/products';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.productContainer}>
          {products.map(item => {
            return (
              <ProductItem
                img={item.image}
                title={item.title}
                price={item.price}
                oldPrice={item.oldPrice}
                avgRating={item.avgRating}
                onProductPress={()=>navigation.navigate('Intro')} 
              />
            );
          })}
          {/* <FlatList
            data={products}
            renderItem={({item}) => (
              <ProductItem
                img={item.image}
                title={item.title}
                avgRating={item.avgRating}
                price={item.price}
                oldPrice={item.oldPrice}
              />
            )}
            keyExtractor={(item)=> item.id}
          /> */}
        </View>
      </View>
  </ScrollView>
  );
};
export default HomeScreen;
