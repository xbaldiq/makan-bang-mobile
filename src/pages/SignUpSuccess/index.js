import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IllSignUpSuccess} from '../../assets';
import {Button, Gap, RNText} from '../../components';
import {Colors} from '../../styles';

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
          onPress={() =>
            navigation.reset({index: 0, routes: [{name: 'MainApp'}]})
          }
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
    backgroundColor: Colors.white,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 80,
  },
  subtitle: {
    color: Colors.gray,
  },
});
