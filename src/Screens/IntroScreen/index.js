import React from 'react';
import {View, Text, SafeAreaView,Dimensions,Image} from 'react-native';
import {Images} from '../../assets/Images';
import { DATA } from './constants';
import normalize from '../../helpers/normalize'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
const IntroScreen = () => {
  function* ygenerator() {
    yield* [
      //    ({<Image source={Images.smile1} style={{width:normalize(10),height:normalize(10)}}/>}),
      Images.smile1,
      Images.smile2,
      Images.smile3,
    ];
  }

  const yAxis = ygenerator();
  return (
    <View style={styles.parent}>
      <Text style={styles.title}>Bezier Line Chart</Text>
      <LineChart
        data={{
          labels: ['💡', '03/02', '04/02', '05/02', '06/02', '07/02', '08/02'],
          datasets: [
            {
              data: [
                // "💡",
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 20} // from react-native
        height={320}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
            formatYLabel={()=><Image source={yAxis.next().value} style={{width:normalize(10), height:normalize(10)}}/>}
        chartConfig={{
          backgroundColor: '#F59C80',
          backgroundGradientFrom: '#red',
          backgroundGradientTo: 'white',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `#F59C80`,
          labelColor: (opacity = 1) => `#BFB6B2`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: 'pink',
          },
        }}
        bezier
        style={{
          marginVertical: 20,
          // marginHorizontal:10,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default IntroScreen;
