import {showMessage} from 'react-native-flash-message';
import {Colors} from '../styles';

export default showToast = (message, type) => {
  showMessage({
    message,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor: type === 'success' ? Colors.success : Colors.red,
  });
};
