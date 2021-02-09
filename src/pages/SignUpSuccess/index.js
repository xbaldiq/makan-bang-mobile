import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, RNText} from '../../components';
import {Colors} from '../../styles';
import {IllSignUpSuccess} from '../../assets';

const SignUpSuccess = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <IllSignUpSuccess />
      <Gap height={30} />
      <RNText size={20}>Mantap</RNText>
      <Gap height={6} />
      <RNText size={14} font="light" style={styles.subtitle}>
        Makanan sudah siap kamu pesan
      </RNText>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          label="Cari Makanan"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default SignUpSuccess;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
  subtitle: {
    color: Colors.gray,
  },
});
