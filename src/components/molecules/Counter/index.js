import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IcAdd, IcMin} from '../../../assets';
import {RNText} from '../../atoms';

const Counter = ({onValueChange}) => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    onValueChange(value);
  }, []);

  const onCount = (type) => {
    let result = value;
    if (type === 'plus') {
      result = value + 1;
    }
    if (type === 'minus') {
      if (value > 1) {
        result = value - 1;
      }
    }
    setValue(result);
    onValueChange(result);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onCount('minus')}>
        <IcMin />
      </TouchableOpacity>
      <RNText size={16} style={styles.value}>
        {value}
      </RNText>
      <TouchableOpacity onPress={() => onCount('plus')}>
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
