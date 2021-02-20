import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {EmptyOrder, Header, OrderTabSection} from '../../components';
import {orderAction} from '../../redux/action';

const Order = ({navigation}) => {
  const {orders} = useSelector((state) => state.orderReducer);
  // const globalState = useSelector((state) => state);
  // console.log('globalState', globalState);
  // const [isEmpty] = useState(orders);
  // const [isEmpty] = useState(orderReducer);
  const dispatch = useDispatch();

  // console.log('isEmpty', isEmpty);

  useEffect(() => {
    console.log('useEffect ordertab section');
    dispatch(orderAction());
  }, []);

  return (
    <View style={styles.screen}>
      {orders.length < 1 ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Header title="Order Kamu" subtitle="Tunggu makanan terbaikmu" />
          <View style={styles.tabContainer}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  tabContainer: {
    marginTop: 24,
    flex: 1,
  },
});
