import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, DropdownPicker, Gap, Header, TextInput} from '../../components';
import {signUpAction} from '../../redux/action';
import {Colors} from '../../styles';
import {useForm} from '../../utils';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: '',
  });
  const dispatch = useDispatch();
  const {registerReducer, photoReducer} = useSelector((state) => state);
  console.log({photoReducer});

  const onSubmit = async () => {
    try {
      console.log('form', form);
      const registerData = {
        ...form,
        ...registerReducer,
      };
      console.log('registerData', registerData);

      dispatch(signUpAction(registerData, photoReducer, navigation));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.screen}>
        <Header
          title="Address"
          subtitle="Make sure it's valid"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <TextInput
            value={form.phoneNumber}
            label="Phone No."
            onChangeText={(value) => setForm('phoneNumber', value)}
            placeholder="Type your phone number"
          />
          <Gap height={16} />
          <TextInput
            value={form.address}
            label="Address"
            onChangeText={(value) => setForm('address', value)}
            placeholder="Type your address"
          />
          <Gap height={16} />
          <TextInput
            value={form.houseNumber}
            label="House Number"
            onChangeText={(value) => setForm('houseNumber', value)}
            placeholder="Type your house number"
          />
          <Gap height={24} />
          <DropdownPicker
            label="City"
            value={form.city}
            onSelect={(value) => setForm('city', value)}
          />
          <Gap height={24} />
          <Button
            label="Continue"
            onPress={onSubmit}
            color={Colors.mainAccent}
          />
        </View>
      </View>
    </ScrollView>
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
    paddingVertical: 26,
  },
});
