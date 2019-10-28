import React from 'react';
import {
  View,
  StyleSheet,

} from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
  return (
  <>
    <Spacer>
      <Text h3>Sign Up for Tracker</Text>
    </Spacer>
      <Input label="Email" />
    <Spacer />
      <Input label="Password" />
    <Spacer>
      <Button title="Sign Up" onPress={() => {}} />
    </Spacer>
    <Spacer>
      <Button title="Sign In" onPress={() => navigation.navigate('Signin')} />
    </Spacer>
    <Spacer>
      <Button title="Go to mainFlow" onPress={() => navigation.navigate('mainFlow')} />
    </Spacer>
  </>
  )
}

SignupScreen.navigationOptions = {
  header: null
}


export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
