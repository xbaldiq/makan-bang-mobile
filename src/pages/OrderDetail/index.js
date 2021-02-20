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
import api from '../../services/api';
import {Colors} from '../../styles';
import {showToast} from '../../utils';

const OrderDetail = ({navigation, route}) => {
  const order = route.params;

  //Utils
  const calculateAmount = (price, qty) => price * qty;
  const calculateTax = (price) => (price * 10) / 100;
  const DRIVER_COST = 25000;

  const onCancel = () => {
    api
      .cancelOrder(order.id)
      .then((res) => {
        showToast('Pesanan berhasil dibatalkan', 'success');
        navigation.reset({
          index: 0,
          routes: [{name: 'MainApp'}],
        });
      })
      .catch((err) => console.log(err));
  };

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
          type="order-summary"
          items={order.quantity}
          name={order.food.name}
          price={order.food.price}
          image={{uri: order.food.picturePath}}
        />
        <RNText style={styles.label}>Details Transaction</RNText>
        <ItemValue
          label={order.food.name}
          value={calculateAmount(order.food.price, order.quantity)}
          type="currency"
        />
        <ItemValue label="Driver" value={DRIVER_COST} type="currency" />
        <ItemValue
          label="Tax"
          value={calculateTax(order.food.price)}
          type="currency"
        />
        <ItemValue
          label="Total Price"
          value={order.total}
          valueColor="#1ABC9C"
          type="currency"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label="Name" value={order.user.name} />
        <ItemValue label="Phone No." value={order.user.phoneNumber} />
        <ItemValue label="Address" value={order.user.address} />
        <ItemValue label="House No." value={order.user.houseNumber} />
        <ItemValue label="City" value={order.user.city} />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Order Status:</Text>
        <ItemValue
          label={`#${order.id}`}
          value={order.status}
          valueColor={
            order.status === 'CANCELLED' ? Colors.warning : Colors.success
          }
        />
      </View>

      <View style={styles.button}>
        {order.status === 'PENDING' && (
          <Button
            label="Batalkan Pesanan"
            color={Colors.warning}
            labelColor={Colors.white}
            onPress={onCancel}
          />
        )}
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
