const initialStateRegister = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  address: '',
  city: '',
  houseNumber: '',
  phoneNumber: '',
};

export const registerReducer = (state = initialStateRegister, action) => {
  switch (action.type) {
    case 'SET_REGISTER':
      return {
        ...state,
        name: action.value.name,
        email: action.value.email,
        password: action.value.password,
        password_confirmation: action.value.password,
      };
    case 'SET_ADDRESS':
      return {
        ...state,
        address: action.value.address,
        city: action.value.city,
        houseNumber: action.value.houseNumber,
        phoneNumber: action.value.phoneNumber,
      };

    default:
      return state;
  }
};

const initPhoto = {
  uri: '',
  type: '',
  name: '',
  isUploadPhoto: false,
};

export const photoReducer = (state = initPhoto, action) => {
  switch (action.type) {
    case 'SET_PHOTO':
      return {
        ...state,
        uri: action.value.uri,
        type: action.value.type,
        name: action.value.name,
      };
    case 'SET_UPLOAD_STATUS':
      return {
        ...state,
        isUploadPhoto: action.value,
      };
    default:
      return state;
  }
};
