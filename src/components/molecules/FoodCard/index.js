import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {FoodDummy1, IcStarOff, IcStarOn} from '../../../assets/index';
import Rating from '../Rating';

const FoodCard = ({image, text, rating, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <View style={styles.container}>
        <Image source={image} style={styles.foodImage} />
        <View style={styles.content}>
          <Text style={styles.title}>{text}</Text>
          <Rating />
          {/* <Rating number={rating} /> */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 8,
    // overflow: 'hidden',
    marginRight: 24,
  },
  content: {padding: 12},
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Reguler',
    color: '#020202',
  },
  foodImage: {
    width: 200,
    height: 140,
    resizeMode: 'cover',
  },
});
