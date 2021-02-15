import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Colors} from '../../../styles';
import {RNText} from '../../atoms';
import ItemListMenu from '../ItemListMenu';

const ProfileTabSection = () => {
  const Account = () => {
    return (
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListMenu label="Edit Profile" />
        <ItemListMenu label="Home Address" />
        <ItemListMenu label="Security" />
        <ItemListMenu label="Payments" />
      </View>
    );
  };

  const AppConfig = () => {
    return (
      <View style={{paddingTop: 8, paddingHorizontal: 24}}>
        <ItemListMenu label="Rate App" />
        <ItemListMenu label="Help Center" />
        <ItemListMenu label="Privary & Policy" />
        <ItemListMenu label="Terms & Conditions" />
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
    {key: '1', title: 'Account'},
    {key: '2', title: 'Makan Bang'},
  ]);

  const renderScene = SceneMap({
    1: Account,
    2: AppConfig,
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

export default ProfileTabSection;

const styles = StyleSheet.create({});
