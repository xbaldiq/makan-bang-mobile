import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components/';
import {Colors} from '../../styles';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Header title="Sign In" subtitle={'Find your best ever meal'} />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Sign In" color={Colors.mainAccent} />
        <Gap height={12} />
        <Button
          label="Create New Account"
          color={Colors.secondaryAccent}
          textColor={Colors.white}
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
  },
});
