import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  Button,
  Gap,
  Header,
  DropdownPicker,
  RNText,
  TextInput,
} from '../../components';
import {Colors} from '../../styles';

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Header
        title="Address"
        subtitle="Make sure it's valid"
        onBack={() => {}}
      />
      <ScrollView style={styles.container}>
        <TextInput label="Phone No." placeholder="Type your phone number" />
        <Gap height={16} />
        <TextInput label="Address" placeholder="Type your address" />
        <Gap height={16} />
        <TextInput label="House Number" placeholder="Type your house number" />
        <Gap height={24} />
        <DropdownPicker label="City" />
        <Gap height={24} />
        <Button
          label="Continue"
          onPress={() => navigation.replace('SignUpSuccess')}
          color={Colors.mainAccent}
        />
      </ScrollView>
    </View>
  );
};

export default SignUpAddress;

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
});
