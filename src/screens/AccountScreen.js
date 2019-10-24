import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const AccountScreen = ({}) => (
  <View style={styles.container}>
    <Text style={{fontSize: 48}}>I'm AccountScreen</Text>
  </View>
);

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
