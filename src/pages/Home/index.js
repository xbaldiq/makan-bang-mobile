import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FoodCard, Gap, HomeProfile, HomeTabSection} from '../../components';
import {getFoodData} from '../../redux/action';
import {Colors} from '../../styles';

const Home = () => {
  const dispatch = useDispatch();
  const {food} = useSelector((state) => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodData());
  }, []);

  return (
    <ScrollView>
      <View style={styles.page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodCardContainer}>
              <Gap width={24} />
              {food.map((item, index) => (
                <FoodCard
                  key={index}
                  image={{uri: item.picturePath}}
                  label={item.name}
                  rating={item.rate}
                  onPress={() => navigation.navigate('FoodDetail', item)}
                />
              ))}
              <Gap width={24} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  foodCardContainer: {
    flexDirection: 'row',
    marginVertical: 12,
  },
  tabContainer: {
    flex: 1,
  },
});
