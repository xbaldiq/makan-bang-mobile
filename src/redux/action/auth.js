import Api from '../../services/api';
import {showToast, storeData} from '../../utils';
import {setLoading} from './global';

export const signUpAction = (registerData, photoReducer, navigation) => async (
  dispatch,
) => {
  dispatch(setLoading(true));
  Api.register(registerData)
    .then((res) => {
      const {access_token, token_type, user} = res.data.data;

      // storing token
      const token = `${token_type} ${access_token}`;
      storeData('token', {value: token});

      if (photoReducer.isUploadPhoto) {
        const photoData = new FormData();
        photoData.append('file', photoReducer);

        Api.uploadPhoto(token_type, access_token, photoData)
          .then((res) => {
            //split and get base photo url, ie: http://makan-bang.test/storage/
            const urlPhoto = user.profile_photo_url.split('assets').shift();

            //get photo relative path
            const photoRelativePath = res.data.data[0];

            user.profile_photo_url = `${urlPhoto}${photoRelativePath}`;
            storeData('userProfile', user);
            dispatch(setLoading(false));
            navigation.reset({index: 0, routes: [{name: 'SignUpSuccess'}]});
          })
          .catch(() => {
            showToast('Upload image error');
            dispatch(setLoading(false));
            navigation.reset({index: 0, routes: [{name: 'SignUpSuccess'}]});
          });
      } else {
        storeData('userProfile', user);
        dispatch(setLoading(false));
        navigation.reset({index: 0, routes: [{name: 'SignUpSuccess'}]});
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch(setLoading(false));
      showToast(
        error?.response?.data?.message
          ? error?.response?.data?.message
          : 'Terjadi Kesalahan',
      );
    });
};

export const signInAction = (form, navigation) => (dispatch) => {
  dispatch(setLoading(true));
  Api.login(form)
    .then((res) => {
      // storing token
      const {access_token, token_type, user} = res.data.data;
      const token = `${token_type} ${access_token}`;
      storeData('token', {value: token});
      storeData('userProfile', user);

      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
      dispatch(setLoading(false));
    })
    .catch((error) => {
      showToast(
        error?.response?.data?.message
          ? error?.response?.data?.message
          : 'Terjadi Kesalahan',
      );
      dispatch(setLoading(false));
    });
};
