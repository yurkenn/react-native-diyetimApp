import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './SignUp.style';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};
const SignUp = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  // navigation
  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleFormSubmit = async formValues => {
    if (formValues.password !== formValues.repassword) {
      console.log('Passwords do not match');
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
        formValues.repassword,
      );
      setLoading(false);
      navigation.navigate('SignInScreen');
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({handleChange, handleSubmit, values}) => (
          <View>
            <Input
              onChangeText={handleChange('usermail')}
              value={values.usermail}
              placeholder="email..."
              icon="email"
            />
            <Input
              onChangeText={handleChange('password')}
              value={values.password}
              placeholder="password..."
              isSecure
              icon="lock"
            />
            <Input
              onChangeText={handleChange('repassword')}
              value={values.repassword}
              placeholder="repassword..."
              isSecure
              icon="lock"
            />

            <Button text="Sign Up" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
      <Button text="Back" onPress={handleBackButton} />
    </View>
  );
};

export default SignUp;
