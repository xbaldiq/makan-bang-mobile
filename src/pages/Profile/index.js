import React from 'react';
import {ScrollView, StyleSheet, View, Image} from 'react-native';
import {ProfileDummy} from '../../assets';
import {
  Button,
  Gap,
  Header,
  ProfileTabSection,
  RNText,
  TextInput,
} from '../../components';
import {Colors} from '../../styles';

const Profile = () => {
  return (
    <View style={styles.screen}>
      {/* <Header title="Sign Up" subtitle={'Register and eat'} onBack={() => {}} /> */}
      {/* <ScrollView style={styles.container}> */}
      <View style={styles.profileDetail}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image source={ProfileDummy} />
          </View>
        </View>
        <View style={styles.profileDescriptionContainer}>
          <RNText>Iqbaldhia</RNText>
          <RNText style={{color: Colors.gray}}>iqbaldhiaa@gmail.com</RNText>
        </View>
      </View>
      <Gap height={24} />
      <View style={styles.profileTab}>
        <ProfileTabSection />
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    // backgroundColor: 'white',
    // paddingHorizontal: 24,
    // paddingVertical: 26,
  },
  profileDetail: {
    backgroundColor: 'white',
    paddingBottom: 26,
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 26,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: Colors.gray,
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: Colors.lightSmoke,
    padding: 24,
  },
  profileDescriptionContainer: {alignItems: 'center'},
  profileTab: {
    flex: 1,
  },
});
