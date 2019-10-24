import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

const SignupScreen = ({ navigation }) => {
  return <>
    <Text style={{fontSize: 48}}>I'm SignupScreen</Text>
    <Button title="Go to Signin" onPress={() => navigation.navigate('Signin')} />
    <Button title="Go to mainFlow" onPress={() => navigation.navigate('mainFlow')} />

  </>
}
export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
