import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import {Number} from '..';
import {IcStarOff, IcStarOn} from '../../../assets';

const Rating = ({rating}) => {
  const renderStar = () => {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        star.push(<IcStarOn key={i} />);
      } else {
        star.push(<IcStarOff key={i} />);
      }
    }
    return star;
  };
  return (
    <View style={styles.ratingContainer}>
      <Text>Rating</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  ratingContainer: {flexDirection: 'row'},
  startContainer: {flexDirection: 'row', marginRight: 4},
  numberRating: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
    marginTop: -2,
  },
});
