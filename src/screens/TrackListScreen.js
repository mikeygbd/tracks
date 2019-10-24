import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const TrackListScreen = ({}) => (
  <View style={styles.container}>
    <Text style={{fontSize: 48}}>I'm TrackListScreen</Text>
  </View>
);

export default TrackListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
