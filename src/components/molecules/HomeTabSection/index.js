import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {getFoodDataByTypes} from '../../../redux/action';
import {Colors} from '../../../styles';
import {RNText} from '../../atoms';
import ItemListFood from '../ItemListFood';

const HomeTabSection = () => {
  const {newTaste, popular, recommended} = useSelector(
    (state) => state.homeReducer,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFoodDataByTypes('new_food'));
  }, []);

  useEffect(() => {
    dispatch(getFoodDataByTypes('popular'));
  }, []);

  useEffect(() => {
    dispatch(getFoodDataByTypes('recommended'));
  }, []);

  const NewTaste = () => {
    const navigation = useNavigation();

    return (
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {newTaste.map((item) => {
          return (
            <ItemListFood
              key={item.id}
              type="product"
              name={item.name}
              price={item.price}
              rating={item.rate}
              image={{uri: item.picturePath}}
              onPress={() => navigation.navigate('FoodDetail', item)}
            />
          );
        })}
      </View>
    );
  };

  const Popular = () => {
    const navigation = useNavigation();

    return (
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {popular.map((item) => {
          return (
            <ItemListFood
              key={item.id}
              type="product"
              name={item.name}
              price={item.price}
              rating={item.rate}
              image={{uri: item.picturePath}}
              onPress={() => navigation.navigate('FoodDetail', item)}
            />
          );
        })}
      </View>
    );
  };

  const Recommended = () => {
    const navigation = useNavigation();

    return (
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        {recommended.map((item) => {
          return (
            <ItemListFood
              key={item.id}
              type="product"
              name={item.name}
              price={item.price}
              rating={item.rate}
              image={{uri: item.picturePath}}
              onPress={() => navigation.navigate('FoodDetail', item)}
            />
          );
        })}
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
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
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

export default HomeTabSection;

const styles = StyleSheet.create({});
