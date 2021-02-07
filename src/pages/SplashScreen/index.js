import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={{height: 20}} />
      <Text style={styles.appName}> FoodMarket </Text>
    </View>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 32,
    color: '#020202',
  },
});
