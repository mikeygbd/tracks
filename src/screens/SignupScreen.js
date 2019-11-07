import React, { useContext } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity

} from 'react-native';
import { Text } from 'react-native-elements'
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext)

  return (
  <View style={styles.container}>
    <AuthForm
      headerText="Sign Up fro Tracker"
      errorMessage={state.errorMessage}
      submitButtonText="Sign Up"
      onSubmit={signup}
    />
    <Spacer>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
      <Text style={styles.link}>Already have an account? Sign in instead.</Text>
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
  link: {
    color: 'blue',

  }
});
