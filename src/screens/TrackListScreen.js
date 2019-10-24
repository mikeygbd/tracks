import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

const TrackListScreen = ({ navigation }) => (
  <>
    <Text style={{fontSize: 48}}>I'm TrackListScreen</Text>
    <Button title="Go to TrackDetail" onPress={() => navigation.navigate('TrackDetail')} />

  </>
);

export default TrackListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
