import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../styles';
import {RNText} from '../../atoms';

const ItemValue = ({label, value}) => {
  return (
    <View style={styles.container}>
      <RNText style={styles.label}>{label}</RNText>
      <RNText>{value}</RNText>
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: Colors.gray,
  },
});
