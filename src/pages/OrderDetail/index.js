import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  Gap,
  Header,
  ItemListFood,
  ItemValue,
  RNText,
} from '../../components';
import {Colors} from '../../styles';

const OrderDetail = ({navigation}) => {
  return (
    <ScrollView>
      <Header
        title="Payment"
        subtitle="You deserve better meal"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <RNText style={styles.label}>Item Ordered</RNText>
        <ItemListFood
          items={2}
          name="Nasi Putih"
          price="10.000"
          type="order-summary"
          value="IDR 150.000"
        />
        <ItemValue label="Driver" value="IDR 50.000" />
        <ItemValue label="Tax" value="IDR 5.000" />
        <ItemValue
          label="Total Price"
          value="IDR 205.000"
          valueColor={Colors.success}
        />
      </View>

      <View style={styles.content}>
        <RNText style={styles.label}>Deliver to:</RNText>
        <ItemValue label="Name" value="Iqbal" />
        <ItemValue label="Phone No." value="0812717171" />
        <ItemValue label="Address" value="Surabaya" />
        <ItemValue label="House No." value="ALT F4" />
        <ItemValue label="City" value="Surabaya" />
      </View>

      <View style={styles.content}>
        <RNText style={styles.label}>Order Status:</RNText>
        <ItemValue label="#ASD123" value="Paid" valueColor={Colors.success} />
      </View>

      <View style={styles.button}>
        <Button
          label="Batalkan Pesanan"
          color={Colors.warning}
          labelColor={Colors.white}
          onPress={() => navigation.navigate('OrderSuccess')}
        />
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: Colors.white,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
  },
  button: {
    paddingHorizontal: 24,
    marginTop: 24,
  },
});
