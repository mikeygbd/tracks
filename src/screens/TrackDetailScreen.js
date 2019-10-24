import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const TrackDetailScreen = ({}) => (
  <View style={styles.container}>
    <Text style={{fontSize: 48}}>I'm TrackDetailScreen</Text>
  </View>
);

export default TrackDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
