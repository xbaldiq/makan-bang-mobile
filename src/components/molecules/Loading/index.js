import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../styles';
// import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      {/* <LottieView
        source={require('../../../assets/Animation/fast-food-mobile-app-loading.json')}
        autoPlay
        loop
        style={styles.animation}
      /> */}
      <ActivityIndicator size="large" color={Colors.mainAccent} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.9)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    marginTop: 12,
    color: Colors.white,
  },
  animation: {
    width: 200,
    height: 200,
    position: 'relative',
  },
});
