import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';
import {getData} from '../../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      getData('token').then((token) => {
        if (token) navigation.reset({index: 1, routes: [{name: 'MainApp'}]});
        else navigation.replace('SignIn');
      });
    }, 750);
  }, []);

  return (
    <View style={styles.container}>
      <Logo />
      <View style={{height: 20}} />
      <Text style={styles.appName}> Makan Bang </Text>
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
    fontFamily: 'Poppins-Medium',
  },
});
