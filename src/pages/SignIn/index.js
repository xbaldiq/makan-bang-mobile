import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, Gap, Header, TextInput} from '../../components/';
import {signInAction} from '../../redux/action';
import {Colors} from '../../styles';
import {useForm} from '../../utils';

const SignIn = ({navigation}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    email: 'register@gmail.com',
    password: 'Testing123',
  });

  const onSubmit = async () => {
    dispatch(signInAction(form, navigation));
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
