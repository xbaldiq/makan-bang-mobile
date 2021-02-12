import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {RNText} from '../index';
import {Colors} from '../../../styles';

const Button = ({
  label,
  color = Colors.mainAccent,
  labelColor = Colors.primaryText,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.container(color)}>
        <RNText size={14} font={'medium'} style={styles.text(labelColor)}>
          {label}
        </RNText>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (color) => ({
    backgroundColor: color,
    padding: 12,
    borderRadius: 8,
  }),
  text: (labelColor) => ({color: labelColor, textAlign: 'center'}),
});
