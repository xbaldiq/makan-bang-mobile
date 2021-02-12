import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, RNText} from '../../components';
import {Colors} from '../../styles';
import {IllOrderSuccess} from '../../assets';

const OrderSuccess = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <IllOrderSuccess />
      <Gap height={30} />
      <RNText size={20}>Makanan segera meluncur</RNText>
      <Gap height={6} />
      <RNText size={14} font="light" style={styles.subtitle}>
        Jangan kemana-kemana ya, tetap dirumah
      </RNText>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
        <Button
          label="Pesan Makanan Lainnya"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
      <Gap height={12} />
      <View style={styles.buttonContainer}>
        <Button
          label="Lihat Pesanan"
          color={Colors.secondaryAccent}
          labelColor={Colors.white}
          onPress={() => navigation.replace('MainApp', {screen: 'Order'})}
        />
      </View>
    </View>
  );
};

export default OrderSuccess;

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
