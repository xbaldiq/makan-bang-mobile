import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker as PickerRN} from '@react-native-picker/picker';
import RNText from '../Text';

const DropdownPicker = ({label}) => {
  return (
    <View>
      <RNText size={16} font="regular">
        {label}
      </RNText>
      <View style={styles.input}>
        <PickerRN
        //   selectedValue={this.state.language}
        //   onValueChange={(itemValue, itemIndex) =>
        //     this.setState({language: itemValue})
        //   }
        >
          <PickerRN.Item label="Java" value="java" />
          <PickerRN.Item label="JavaScript" value="js" />
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
