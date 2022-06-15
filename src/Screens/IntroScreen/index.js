import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Carousel from 'react-native-snap-carousel/src/carousel/Carousel';
import { DATA } from './constants';



const IntroScreen = () => {

    const renderItem=({item,index})=>{
        return (
            <View style={{
                backgroundColor:'floralwhite',
                borderRadius: 5,
                height: 250,
                padding: 50,
                marginLeft: 25,
                marginRight: 25, }}>
              <Text style={{fontSize: 30}}>{item.title}</Text>
              <Text>{item.text}</Text>
              <Image source={item.img}/>
            </View>
  
          )
    }


        return (
          <SafeAreaView style={{flex: 1, backgroundColor:'floralwhite', paddingTop: 50, }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={(item)=>item.id}
                  data={DATA}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    

};
export default IntroScreen;
