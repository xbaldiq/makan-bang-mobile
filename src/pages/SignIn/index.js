import React from 'react';
import Axios from 'axios';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components/';
import {Colors} from '../../styles';
import {useForm} from '../../utils';
import Api, {apiInstance} from '../../services/api';

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = async () => {
    try {
      console.log('form', form);
      // const response = await Axios.post(
      //   'http://192.168.1.110:8000/api/login',
      //   form,
      // );
      const response = await Api.login(form);
      console.log('response', response);
    } catch (error) {
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
      console.log(error);
    }
  };

  return (
    <View style={styles.screen}>
      <Header title="Sign In" subtitle={'Find your best ever meal'} />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
          value={form.email}
          onChangeText={(value) => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Type your password"
          secureTextEntry
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
        />
        <Gap height={24} />
        <Button label="Sign In" color={Colors.mainAccent} onPress={onSubmit} />
        <Gap height={12} />
        <Button
          label="Create New Account"
          color={Colors.secondaryAccent}
          labelColor={Colors.white}
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
