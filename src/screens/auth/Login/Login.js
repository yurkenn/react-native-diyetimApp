import {View, Text} from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './Login.styles';
const Login = ({navigation}) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View style={styles.innerContainer}>
            <Text style={styles.title}>kcal</Text>
            <Input
              placeholder="Email"
              onChangeText={handleChange('email')}
              handleBlur={handleBlur('email')}
              value={values.email}
              icon="email"
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            <Input
              placeholder="Password"
              onChangeText={handleChange('password')}
              handleBlur={handleBlur('password')}
              value={values.password}
              isSecure
              icon="lock"
            />
            {errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <Button title="Login" onPress={handleSubmit} />
            <View style={styles.bottomContainer}>
              <Text style={styles.bottomText}>Don't You Have An Account ?</Text>
              <Text style={styles.bottomButton} onPress={handleSignUp}>
                Sign up
              </Text>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
