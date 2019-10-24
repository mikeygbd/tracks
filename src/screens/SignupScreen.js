import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const SignupScreen = ({}) => (
  <View style={styles.container}>
    <Text style={{fontSize: 48}}>I'm SignupScreen</Text>
  </View>
);

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
