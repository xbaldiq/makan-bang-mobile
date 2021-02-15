import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker as PickerRN} from '@react-native-picker/picker';
import RNText from '../Text';

const DropdownPicker = ({label, value, onSelect}) => {
  return (
    <View>
      <RNText size={16} font="regular">
        {label}
      </RNText>
      <View style={styles.input}>
        <PickerRN
          selectedValue={value}
          onValueChange={(itemValue) => onSelect(itemValue)}>
          <PickerRN.Item label="Surabaya" value="Surabaya" />
          <PickerRN.Item label="Jakarta" value="Jakarta" />
          <PickerRN.Item label="Yogyakarta" value="Yogyakarta" />
        </PickerRN>
      </View>
    </View>
  );
};

export default DropdownPicker;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
});
