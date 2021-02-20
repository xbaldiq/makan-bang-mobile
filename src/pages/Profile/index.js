import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Gap, ProfileTabSection, RNText} from '../../components';
import {Colors} from '../../styles';
import {getData} from '../../utils';

const Profile = () => {
  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    getUserProfile();
  }, []);

  const getUserProfile = () => {
    getData('userProfile').then((res) => setUserProfile(res));
  };

  const updatePhoto = () => {
    // getData('userProfile').then((res) => {
    //   setUserProfile(res);
    // });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.profileDetail}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <TouchableOpacity onPress={updatePhoto}>
              <Image
                source={{uri: userProfile.profile_photo_url}}
                style={styles.photoContainer}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.profileDescriptionContainer}>
          <RNText>{userProfile.name}</RNText>
          <RNText style={{color: Colors.gray}}>{userProfile.email}</RNText>
        </View>
      </View>
      <Gap height={24} />
      <View style={styles.profileTab}>
        <ProfileTabSection />
      </View>
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
