import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FoodCover1, IcBackWhite} from '../../assets';
import {Button, Counter, RNText} from '../../components';
import {Colors} from '../../styles';

const FoodDetail = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={FoodCover1} style={styles.cover}>
        <TouchableOpacity style={styles.back}>
          <IcBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.mainContent}>
          <View style={styles.productContainer}>
            <View>
              <RNText size={16}>Cherry Healthy</RNText>
              <RNText>Rating</RNText>
            </View>
            <Counter />
          </View>
          <View>
            <RNText style={styles.description}>
              Makanan khas Bandung yang cukup sering dipesan oleh anak muda
              dengan pola makan yang cukup tinggi dengan mengutamakan diet yang
              sehat dan teratur.
            </RNText>
          </View>
          <View style={styles.ingredients}>
            <RNText font="medium">Ingredients:</RNText>
            <RNText>Seledri, telur, blueberry, madu.</RNText>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <RNText style={{color: Colors.gray}}>Price</RNText>
            <RNText>Rp 150.000</RNText>
          </View>
          <View style={styles.button}>
            <Button label="Order Now" />
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
