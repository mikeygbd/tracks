import React, { useState, useContext } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity

} from 'react-native';
import { Text, Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext'

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext)
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
       {state.errorMessage ? (
         <Text style={styles.errorMessage}>{state.errorMessage}</Text>
       ): null }
    <Spacer>
      <Button title="Sign Up" onPress={() => signup({ email, password })} />
    </Spacer>
    <Spacer>
      <Text>Already have an account?</Text><TouchableOpacity onPress={() => navigation.navigate('Signin')}>
      <Text style={styles.link}>Sign in</Text>
      </TouchableOpacity>
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
  errorMessage: {
    marginLeft: 15,
    marginTop: 15,
    fontSize: 16,
    color: 'red'
  },
  link: {
    color: 'blue',

  }
});
