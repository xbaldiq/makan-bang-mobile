import React from 'react';
import {StyleSheet, Text} from 'react-native';
import NumberFormat from 'react-number-format';
import {Colors} from '../../../styles';
import {RNText} from '../../atoms';

const Number = ({value, type, style}) => {
  if (type === 'decimal') {
    return (
      <NumberFormat
        value={value}
        decimalSeparator="."
        decimalScale={1}
        displayType={'text'}
        renderText={(value) => (
          <RNText size={13} style={{color: Colors.gray, ...style}}>
            {value}
          </RNText>
        )}
        decimalScale={1}
        fixedDecimalScale
      />
    );
  }

  return (
    <NumberFormat
      value={value}
      thousandSeparator="."
      decimalSeparator=","
      displayType="text"
      prefix="IDR "
      renderText={(value) => (
        <RNText size={13} style={{color: Colors.gray, ...style}}>
          {value}
        </RNText>
      )}
      style={style}
    />
  );
};

export default Number;

const styles = StyleSheet.create({});
