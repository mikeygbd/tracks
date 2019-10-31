import React, { useState } from 'react';
import {
  View,
  StyleSheet,

} from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
  <View style={styles.container}>
    <Spacer>
      <Text h3>Sign Up for Tracker</Text>
    </Spacer>
      <Input
      label="Email"
      value={email}
      onChangeText={setEmail}
      autoCapitalize="none"
      autoCorrect={false}
      />
    <Spacer />
      <Input
      secureTextEntry
      label="Password"
      value={password}
      onChangeText={setPassword}
      autoCapitalize="none"
      autoCorrect={false}
       />
    <Spacer>
      <Button title="Sign Up" onPress={() => {}} />
    </Spacer>
    <Spacer>
      <Button title="Sign In" onPress={() => navigation.navigate('Signin')} />
    </Spacer>
    <Spacer>
      <Button title="Go to mainFlow" onPress={() => navigation.navigate('mainFlow')} />
    </Spacer>
  </View>
  )
}

SignupScreen.navigationOptions = {
  header: null
}


export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 250,
    justifyContent: 'center',
    flex: 1,
  },
});
