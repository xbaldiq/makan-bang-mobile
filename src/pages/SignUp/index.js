import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {Button, Gap, Header, RNText, TextInput} from '../../components';
import {Colors} from '../../styles';
import {showToast, useForm} from '../../utils';

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const [photo, setPhoto] = useState('');

  const onSubmit = () => {
    console.log('form', form);
    dispatch({type: 'SET_REGISTER', value: form});
    navigation.navigate('SignUpAddress');
  };

  const addPhoto = () => {
    const option = {
      quality: 0.6,
      maxHeight: 200,
      maxWidth: 200,
    };
    launchImageLibrary(option, (response) => {
      console.log('response', response);
      if (response.errorCode) showToast(response.errorCode);
      else if (response.didCancel) return;

      const {fileName, type, uri} = response;
      const source = {uri};
      const imageData = {
        uri,
        type,
        name: fileName,
      };

      dispatch({type: 'SET_PHOTO', value: imageData});
      dispatch({type: 'SET_UPLOAD_STATUS', value: true});

      console.log('setphoto', source);
      setPhoto(source);
    });
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.screen}>
        <Header
          title="Sign Up"
          subtitle={'Register and eat'}
          onBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <View style={styles.photo}>
            <TouchableOpacity onPress={addPhoto}>
              <View style={styles.borderPhoto}>
                {photo ? (
                  <Image source={photo} style={styles.photoContainer} />
                ) : (
                  <View style={styles.photoContainer}>
                    <RNText size={14} font="light" style={styles.addPhoto}>
                      Add Photo
                    </RNText>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>
          <TextInput
            label="Full Name"
            placeholder="Type your full name"
            value={form.name}
            onChangeText={(value) => setForm('name', value)}
          />
          <Gap height={16} />
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
            value={form.password}
            secureTextEntry
            onChangeText={(value) => setForm('password', value)}
          />
          <Gap height={24} />
          <Button
            label="Continue"
            onPress={() => onSubmit()}
            color={Colors.mainAccent}
          />
          <Gap height={12} />
        </View>
      </View>
    </ScrollView>
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
    paddingVertical: 26,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhoto: {
    color: Colors.gray,
    textAlign: 'center',
  },
});
