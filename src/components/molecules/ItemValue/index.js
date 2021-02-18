import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../styles';
import {RNText} from '../../atoms';
import Number from '../Number';

const ItemValue = ({label, value, valueColor = Colors.black, type}) => {
  return (
    <View style={styles.container}>
      <RNText style={styles.label}>{label}</RNText>

      {type === 'currency' ? (
        <Number value={value} style={styles.value(valueColor)} />
      ) : (
        <RNText style={styles.value(valueColor)}>{value}</RNText>
      )}
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
  value: (color) => ({color: color}),
});
