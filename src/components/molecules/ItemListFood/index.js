import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {FoodDummy1, FoodDummy2} from '../../../assets';
import {Colors} from '../../../styles';
import {RNText} from '../../atoms';
import Number from '../Number';
import Rating from '../Rating';

/**
 Type:
 1.product
 2. order-summary
 3. in-progress
 4. past-orders 
 */

const ItemListFood = ({
  image = FoodDummy1,
  onPress,
  items,
  rating,
  price = '50rb',
  type,
  name = 'bumil placholder',
  date,
  status,
}) => {
  const renderContent = (type) => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={styles.content}>
              <RNText size={16}>{name}</RNText>
              <Number value={price} />
            </View>
            <Rating rating={rating} />
          </>
        );
      case 'order-summary':
        return (
          <>
            <View style={styles.content}>
              <RNText size={16}>{name}</RNText>
              <Number value={price} />
            </View>
            <RNText>{items} items</RNText>
          </>
        );
      case 'in-progress':
        return (
          <>
            <View style={styles.content}>
              <RNText size={16}>{name}</RNText>
              <Number value={price} />
            </View>
          </>
        );
      case 'past-orders':
        return (
          <>
            <View style={styles.content}>
              <RNText size={16}>{name}</RNText>
              <RNText size={13} style={{color: Colors.gray}}>
                {items} items . IDR {price}
              </RNText>
            </View>
            <View>
              <RNText style={styles.date}>{date}</RNText>
              <RNText style={styles.status}>{status}</RNText>
            </View>
          </>
        );

      default:
        return (
          <>
            <View style={styles.content}>
              <RNText size={16}>{name}</RNText>
              <RNText size={13} style={{color: Colors.gray}}>
                IDR {price}
              </RNText>
            </View>
            <Rating />
          </>
        );
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        {renderContent(type)}
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  date: {},
  status: {color: Colors.red},
});
