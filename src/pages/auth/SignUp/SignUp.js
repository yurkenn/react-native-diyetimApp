import {View, Text} from 'react-native';
import React from 'react';
import styles from './SignUp.style';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import {Formik} from 'formik';
const SignUp = ({navigation}) => {
  // navigation
  const handleBackButton = () => {
    navigation.goBack();
  };
  const initialFormValues = {
    usermail: '',
    password: '',
    repassword: '',
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
            <Input
              onChangeText={handleChange('repassword')}
              value={values.repassword}
              placeholder="repassword..."
              isSecure
              icon="lock"
            />

            <Button text="Sign Up" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
      <Button text="Back" onPress={handleBackButton} />
    </View>
  );
};

export default SignUp;
