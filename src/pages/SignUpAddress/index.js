import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Gap, Header, DropdownPicker, TextInput} from '../../components';
import {Colors} from '../../styles';
import {useForm, showToast} from '../../utils';
import Axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import Api, {apiInstance} from '../../services/api';

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
  // const showToast = (message, type) => {
  //   showMessage({
  //     message,
  //     type: type === 'success' ? 'success' : 'danger',
  //     backgroundColor: type === 'success' ? Colors.success : Colors.red,
  //   });
  // };

  const onSubmit = async () => {
    try {
      console.log('form', form);
      const data = {
        ...form,
        ...registerReducer,
      };
      console.log('data', data);

      dispatch({type: 'SET_LOADING', value: true});
      const response = await Api.register(data);
      const {access_token, token_type} = response.data.data;
      console.log('response:', response.data);

      if (photoReducer.isUploadPhoto) {
        const photoData = new FormData();
        photoData.append('file', photoReducer);
        const response = await Api.uploadPhoto(
          token_type,
          access_token,
          photoData,
        );
        // const config = {
        //   headers: {
        //     Authorization: `${token_type} ${access_token}`,
        //     'Content-Type': 'multipart/form-data',
        //   },
        // };
        // console.log('config:', config);
        // const response = await Axios.post(
        //   'https://360a90bf6d0e.ngrok.io/api/user/photo',
        //   photoData,
        //   config,
        // );

        console.log('response upload photo', response);

        showToast('Register Success', 'success');
      }
      dispatch({type: 'SET_LOADING', value: false});

      // navigation.replace('SignUpSuccess)
    } catch (error) {
      console.log(error);
      showToast(error?.response?.data?.message);
      dispatch({type: 'SET_LOADING', value: false});
      if (error.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        /*
         * The request was made but no response was received, `error.request`
         * is an instance of XMLHttpRequest in the browser and an instance
         * of http.ClientRequest in Node.js
         */
        console.log(error.request);
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log('Error', error.message);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.screen}>
        <Header
          title="Address"
          subtitle="Make sure it's valid"
          onBack={() => {}}
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
    // marginVertical: 26,
    // marginTop: 26,
    // paddingBottom: 30,
    paddingVertical: 26,
    // marginTop: 24,
  },
});
