import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {orderInProgressAction, orderPastAction} from '../../../redux/action';
import {Colors} from '../../../styles';
import {RNText} from '../../atoms';
import ItemListFood from '../ItemListFood';

const OrderTabSection = () => {
  const dispatch = useDispatch();
  const {inProgress, past} = useSelector((state) => state.orderReducer);

  useEffect(() => {
    //get inProgress
    dispatch(orderInProgressAction());

    //get past
    dispatch(orderPastAction());
  }, []);

  // Tab NewTaste
  const InProgress = () => {
    const navigation = useNavigation();
    return (
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {inProgress.map((order) => (
          <ItemListFood
            key={order.id}
            image={{uri: order.food.picturePath}}
            onPress={() => navigation.navigate('OrderDetail')}
            items={order.quantity}
            price={order.total}
            type="in-progress"
            name={order.food.name}
          />
        ))}
      </View>
    );
  };

  const PastOrders = () => {
    const navigation = useNavigation();
    return (
      <ScrollView>
        <View style={{paddingTop: 8, paddingHorizontal: 24}}>
          {past.map((order) => (
            <ItemListFood
              key={order.id}
              image={{uri: order.food.picturePath}}
              onPress={() => navigation.navigate('OrderDetail')}
              items={order.quantity}
              price={order.total}
              type="past-orders"
              name={order.food.name}
              date={new Date(order.created_at).toDateString()}
              status={order.status}
            />
          ))}
        </View>
      </ScrollView>
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
      renderLabel={({route, focused}) => (
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
