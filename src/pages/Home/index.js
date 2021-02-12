import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {
  FoodCard,
  Gap,
  RNText,
  HomeTabSection,
  HomeProfile,
} from '../../components';
import {
  FoodDummy1,
  ProfileDummy,
  FoodDummy2,
  FoodDummy3,
  FoodDummy4,
} from '../../assets/Dummy/';
import {Colors} from '../../styles';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodCardContainer}>
              <Gap width={24} />
              <FoodCard image={FoodDummy1} />
              <FoodCard image={FoodDummy2} />
              <FoodCard image={FoodDummy3} />
              <FoodCard image={FoodDummy4} />
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
