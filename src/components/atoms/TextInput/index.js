import React from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import {TextInput as TextInputPPR} from 'react-native-paper';
import {Colors} from '../../../styles';
import RNText from '../Text/';

const TextInput = ({label, placeholder}) => {
  return (
    <View>
      <RNText size={16} font={'medium'}>
        {label}
      </RNText>
      <TextInputRN style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 8,
    padding: 10,
  },
});
