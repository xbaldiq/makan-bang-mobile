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

const OrderSummary = ({navigation, route}) => {
  // route params
  const params = route.params;
  const {item, transaction, userProfile} = params;

  // DEBUGGING
  // console.log({item, transaction, userProfile});

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
          image={{uri: item.picturePath}}
          name={item.name}
          price={item.price}
          items={transaction.totalItem}
          type="order-summary"
        />
        <ItemValue label="Driver" value={transaction.driver} type="currency" />
        <ItemValue label="Tax" value={transaction.tax} type="currency" />
        <ItemValue
          label="Total Price"
          value={transaction.total}
          valueColor={Colors.success}
          type="currency"
        />
      </View>

      <View style={styles.content}>
        <RNText style={styles.label}>Deliver to:</RNText>
        <ItemValue label="Name" value={userProfile.name} />
        <ItemValue
          label="Phone No."
          value={userProfile.phone || 'Belum mengisi Nomor HP'}
        />
        <ItemValue label="Address" value={userProfile.address} />
        <ItemValue label="House No." value={userProfile.houseNumber} />
        <ItemValue label="City" value={userProfile.city} />
      </View>

      <View style={styles.button}>
        <Button
          label="Checkout Now"
          onPress={() => navigation.navigate('OrderSuccess')}
        />
      </View>
      <Gap height={20} />
    </ScrollView>
  );
};

export default OrderSummary;

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
