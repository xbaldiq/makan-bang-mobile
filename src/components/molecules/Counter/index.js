import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IcAdd, IcMin} from '../../../assets';
import {RNText} from '../../atoms';

const Counter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <IcMin />
      </TouchableOpacity>
      <RNText size={16} style={styles.value}>
        14
      </RNText>
      <TouchableOpacity>
        <IcAdd />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    marginHorizontal: 10,
  },
});
