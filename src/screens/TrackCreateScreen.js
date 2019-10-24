import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const TrackCreateScreen = ({}) => (
  <View style={styles.container}>
    <Text style={{fontSize: 48}}>I'm TrackCreateScreen</Text>
  </View>
);

export default TrackCreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
