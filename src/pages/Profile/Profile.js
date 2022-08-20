import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
const Profile = ({navigation}) => {
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  function onAuthStateChanged(user) {
    if (!user) {
      navigation.navigate('SignInScreen');
    }
  }

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <View>
      <Text>Profile</Text>
      <Button title="Sing Out" onPress={handleSignOut} />
    </View>
  );
};

export default Profile;
