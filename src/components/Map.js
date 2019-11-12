import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';
import MapView from 'react-native-maps'


const Map = ({}) => (

    <MapView
    style={styles.map}
    initialRegion={{
      latitude: 37.33233,
      longitude: -122.03121,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    }}
     />

);

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: 300
  }
});
