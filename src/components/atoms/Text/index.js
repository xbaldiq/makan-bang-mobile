import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Colors} from '../../../styles';

const RNText = ({size, font = 'regular', style, children, ...props}) => {
  return (
    <Text {...props} style={[{fontSize: size, ...textStyles[font]}, style]}>
      {children}
    </Text>
  );
};

export default RNText;

const textStyles = StyleSheet.create({
  regular: {
    fontFamily: 'Poppins-Regular',
    color: Colors.black,
  },
  medium: {
    fontFamily: 'Poppins-Medium',
    color: Colors.black,
  },
  light: {
    fontFamily: 'Poppins-Light',
    color: Colors.black,
  },
});
