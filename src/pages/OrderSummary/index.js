import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {
  Button,
  Gap,
  Header,
  ItemListFood,
  ItemValue,
  Loading,
  RNText,
} from '../../components';
import api from '../../services/api';
import {Colors} from '../../styles';

const OrderSummary = ({navigation, route}) => {
  // route params
  const params = route.params;
  const {item, transaction, userProfile} = params;

  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentURL, setPaymentURL] = useState('https://google.com');

  // DEBUGGING
  console.log({item, transaction, userProfile});

  const onCheckout = () => {
    const data = {
      food_id: item.id,
      user_id: userProfile.id,
      quantity: transaction.totalItem,
      total: transaction.total,
      status: 'PENDING',
    };

    // form.append('data', data);
    console.log('data:', data);
    api
      .checkout(data)
      .then((res) => {
        console.log('res', res);
        const {payment_url} = res.data.data;

        setIsPaymentOpen(true);
        setPaymentURL(payment_url);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  const onNavChange = (state) => {
    console.log('nav', state);

    const titleWeb = 'Laravel';
    if (state.title === titleWeb) {
      // navigation.replace('OrderSuccess');
      navigation.reset({index: 0, routes: [{name: 'OrderSuccess'}]});
    }
  };

  if (isPaymentOpen) {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Header
          title="Payment"
          subtitle="You deserve better meal"
          onBack={() => setIsPaymentOpen(false)}
        />
        <View style={{flex: 1}}>
          <WebView
            source={{uri: paymentURL}}
            renderLoading={() => <Text>Testxxxxxx</Text>}
            // renderLoading={() => <Loading />}
            onNavigationStateChange={onNavChange}
          />
          {/* <WebView source={{uri: 'https://google.com'}} style={{marginTop: 20}} /> */}
        </View>
      </ScrollView>
    );
  }

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
          onPress={onCheckout}
          // onPress={() => navigation.navigate('OrderSuccess')}
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
