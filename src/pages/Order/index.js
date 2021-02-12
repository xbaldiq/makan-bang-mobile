import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  Button,
  EmptyOrder,
  Gap,
  Header,
  OrderTabSection,
  RNText,
} from '../../components';
import {Colors} from '../../styles';

const Order = ({navigation}) => {
  const [isEmpty] = useState(false);
  return (
    <View style={styles.screen}>
      {isEmpty ? (
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
