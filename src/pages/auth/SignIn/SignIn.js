import {View, Text} from 'react-native';
import React from 'react';
import styles from './SignIn.style';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import {Formik} from 'formik';
const SignIn = ({navigation}) => {
  // navigation
  const handleSingUpButton = () => {
    navigation.navigate('SignUpScreen');
  };

  const initialFormValues = {
    usermail: '',
    password: '',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Formik
        initialValues={initialFormValues}
        onSubmit={values => console.log(values)}>
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

            <Button text="Login" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
      <Button text="Sign Up" onPress={handleSingUpButton} />
    </View>
  );
};

export default SignIn;
