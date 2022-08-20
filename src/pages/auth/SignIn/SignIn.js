import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './SignIn.style';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';

const initialFormValues = {
  usermail: '',
  password: '',
};

const SignIn = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  // navigation
  const handleSingUpButton = () => {
    navigation.navigate('SignUpScreen');
  };

  const handleFormSignIn = async formValues => {
    try {
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      navigation.navigate('HomeScreen');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSignIn}>
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

            <Button text="Login" loading={loading} onPress={handleSubmit} />
          </View>
        )}
      </Formik>
      <Button text="Sign Up" onPress={handleSingUpButton} />
    </View>
  );
};

export default SignIn;
