import auth from '@react-native-firebase/auth';
import {showMessage, hideMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../utils/authErrorMessageParser';
// login

export const loginFB = async (email, password) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    showMessage({
      message: 'Welcome Back',
      type: 'success',
    });
    return true;
  } catch (error) {
    showMessage({
      message: authErrorMessageParser(error.code),
      type: 'danger',
    });
    return false;
  }
};

// logout

export const logoutFB = async () => {
  try {
    await auth().signOut();
    showMessage({
      message: 'Goodbye',
      type: 'success',
    });
    return true;
  } catch (error) {
    showMessage({
      message: authErrorMessageParser(error.code),
      type: 'danger',
    });
    return false;
  }
};

// signup

export const signUpFB = async (email, password) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    showMessage({
      message: 'Welcome to the family',
      type: 'success',
    });
    return true;
  } catch (error) {
    showMessage({
      message: authErrorMessageParser(error.code),
      type: 'danger',
    });
    return false;
  }
};
