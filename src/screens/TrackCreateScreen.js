import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Map from '../components/Map'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'

const TrackCreateScreen = ({}) => (
  <SafeAreaView forceInset={{ top: 'always' }}>
    <Text h2>Create a Track</Text>
    <Map />
  </SafeAreaView>
);

export default TrackCreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
