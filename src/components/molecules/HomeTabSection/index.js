import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import {Colors} from '../../../styles';
import {RNText} from '../../atoms';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native';

const HomeTabSection = () => {
  // Tab NewTaste
  const NewTaste = () => {
    const navigation = useNavigation();
    return (
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood
          rating={5}
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={5}
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={5}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={5}
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
        />
      </View>
    );
  };

  const Popular = () => {
    const navigation = useNavigation();
    return (
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood
          rating={5}
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={5}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={5}
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={5}
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
        />
      </View>
    );
  };

  const Recommended = () => {
    const navigation = useNavigation();
    return (
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListFood
          rating={5}
          image={FoodDummy3}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={5}
          image={FoodDummy2}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={5}
          image={FoodDummy1}
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ItemListFood
          rating={5}
          image={FoodDummy4}
          onPress={() => navigation.navigate('FoodDetail')}
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
