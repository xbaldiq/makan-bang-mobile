import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, RNText, TextInput} from '../../components';
import {Colors} from '../../styles';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Header title="Sign Up" subtitle={'Register and eat'} onBack={() => {}} />
      <ScrollView style={styles.container}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <View style={styles.photoContainer}>
              <RNText size={14} font="light" style={styles.addPhoto}>
                Add Photo
              </RNText>
            </View>
          </View>
        </View>
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button
          label="Continue"
          onPress={() => navigation.navigate('SignUpAddress')}
          color={Colors.mainAccent}
        />
        <Gap height={24} />
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    // marginVertical: 26,
    // marginTop: 26,
    // paddingBottom: 30,
    paddingVertical: 26,
    // marginTop: 24,
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
  addPhoto: {
    color: Colors.gray,
    textAlign: 'center',
  },
});
