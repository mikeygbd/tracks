import React, { useContext } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

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
    <NavLink
    routeName="Signin"
    text="Already have an account? sign in instead."
    />
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
