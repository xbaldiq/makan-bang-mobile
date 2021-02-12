import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcNext} from '../../../assets';
import {RNText} from '../../atoms';

const ItemListMenu = ({label}) => {
  return (
    <View style={styles.container}>
      <RNText size={14}>{label}</RNText>
      <IcNext />
    </View>
  );
};

export default ItemListMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 7,
    justifyContent: 'space-between',
  },
});
