import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const SigninScreen = ({}) => (
  <View style={styles.container}>
    <Text style={{fontSize: 48}}>I'm SigninScreen</Text>
  </View>
);

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
