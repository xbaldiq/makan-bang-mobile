import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, RNText} from '../../../components';
import {Colors} from '../../../styles';
import {IllOrderEmpty} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const EmptyOrder = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.screen}>
      <IllOrderEmpty />
      <Gap height={30} />
      <RNText size={20}>Kamu lapar?</RNText>
      <Gap height={6} />
      <RNText size={14} font="light" style={styles.subtitle}>
        Yuk mari pesan makanan
      </RNText>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          label="Cari Makanan"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
      <Gap height={12} />
    </View>
  );
};

export default EmptyOrder;

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
