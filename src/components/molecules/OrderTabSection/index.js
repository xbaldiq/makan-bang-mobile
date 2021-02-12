import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import {Colors} from '../../../styles';
import {RNText} from '../../atoms';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native';

const OrderTabSection = () => {
  // Tab NewTaste
  const InProgress = () => {
    const navigation = useNavigation();
    return (
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood
          image={FoodDummy1}
          onPress={() => navigation.navigate('OrderDetail')}
          items={3}
          price="750.000"
          type="in-progress"
          name="soto lamongan"
        />
        <ItemListFood
          image={FoodDummy2}
          onPress={() => navigation.navigate('OrderDetail')}
          items={3}
          price="750.000"
          type="in-progress"
          name="soto lamongan"
        />
        <ItemListFood
          image={FoodDummy3}
          onPress={() => navigation.navigate('OrderDetail')}
          items={3}
          price="750.000"
          type="in-progress"
          name="soto lamongan"
        />
        <ItemListFood
          image={FoodDummy4}
          onPress={() => navigation.navigate('OrderDetail')}
          items={3}
          price="750.000"
          type="in-progress"
          name="soto lamongan"
        />
      </View>
    );
  };

  const PastOrders = () => {
    const navigation = useNavigation();
    return (
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood
          image={FoodDummy4}
          onPress={() => navigation.navigate('OrderDetail')}
          items={3}
          price="750.000"
          type="past-orders"
          name="soto lamongan"
          date="Jun 12, 14:00"
        />
        <ItemListFood
          image={FoodDummy3}
          onPress={() => navigation.navigate('OrderDetail')}
          items={3}
          price="750.000"
          type="past-orders"
          name="soto lamongan"
          date="Jun 12, 14:00"
          status="Cancelled"
        />
      </View>
    );
  };

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{
        alignSelf: 'center',
        backgroundColor: Colors.black,
        height: 3,
        width: '15%',
        marginLeft: '3%',
      }}
      style={{
        backgroundColor: 'white',
        elevation: 0,
        borderBottomColor: Colors.smoke,
        borderBottomWidth: 1,
      }}
      tabStyle={{width: 'auto'}}
      renderLabel={({route, focused, color}) => (
        <RNText
          font={'medium'}
          style={{color: focused ? Colors.black : Colors.gray, margin: 8}}>
          {route.title}
        </RNText>
      )}
    />
  );

  const initialLayout = {width: Dimensions.get('window').width};

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrders,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({});
