import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {IcBackWhite} from '../../assets';
import {Button, Counter, Number, Rating, RNText} from '../../components';
import {Colors} from '../../styles';
import {getData} from '../../utils';

const FoodDetail = ({navigation, route}) => {
  const [totalItem, setTotalItem] = useState(1);
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    getData('userProfile').then((res) => {
      setUserProfile(res);
    });
  }, []);

  // route params
  const item = route.params;
  const {id, name, picturePath, description, ingredients, price, rate} = item;

  const onCounterChange = (value) => {
    setTotalItem(value);
  };

  const onOrder = () => {
    const amount = price * totalItem;
    const tax = (1 / 100) * amount;
    const driver = 50000;
    const total = amount + tax + driver;

    const data = {
      item,
      transaction: {
        amount,
        totalItem,
        tax,
        driver,
        total,
      },
      userProfile,
    };

    navigation.navigate('OrderSummary', data);
  };

  return (
    <View style={styles.page}>
      <ImageBackground source={{uri: picturePath}} style={styles.cover}>
        <TouchableOpacity style={styles.back}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <RNText size={16}>{name}</RNText>
              <Rating rating={rate} />
            </View>
            <Counter onValueChange={onCounterChange} />
          </View>
          <View>
            <RNText style={styles.description}>{description}</RNText>
          </View>
          <View style={styles.ingredients}>
            <RNText font="medium">Ingredients:</RNText>
            <RNText>{ingredients}</RNText>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <RNText style={{color: Colors.gray}}>Price</RNText>
            <Number value={totalItem * price} />
          </View>
          <View style={styles.button}>
            <Button label="Order Now" onPress={onOrder} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  page: {flex: 1},
  cover: {
    height: 330,
    paddingTop: 24,
    paddingLeft: 22,
  },
  back: {
    // backgroundColor: 'yellow',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingTop: 26,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
    marginTop: -40,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  mainContent: {
    flex: 1,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  description: {
    marginBottom: 16,
  },
  ingredients: {
    marginBottom: 16,
  },
  footer: {flexDirection: 'row', paddingVertical: 16, alignItems: 'center'},
  priceContainer: {flex: 1},
  button: {
    width: 150,
  },
});
