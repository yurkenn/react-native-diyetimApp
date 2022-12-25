import {View, Text} from 'react-native';
import React from 'react';
import styles from './Sign.styles';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {signUpFB} from '../../../firebase';
import {useState} from 'react';

const Sign = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const handleSignUpText = () => {
    navigation.navigate('Login');
  };

  const onSubmit = async values => {
    setLoading(true);
    await signUpFB(values.email, values.password);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{email: '', password: '', confirmPassword: ''}}
        onSubmit={onSubmit}
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
            <Input
              placeholder="Confirm Password"
              onChangeText={handleChange('confirmPassword')}
              handleBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              isSecure
              icon="lock"
            />
            {errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <Button title="Sign Up" onPress={handleSubmit} loading={loading} />
            <View style={styles.bottomContainer}>
              <Text style={styles.bottomText}>Already Have An Account ?</Text>
              <Text style={styles.bottomButton} onPress={handleSignUpText}>
                Log In
              </Text>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Sign;
