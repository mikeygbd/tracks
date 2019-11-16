import React, { useContext } from 'react';
import {
  StyleSheet,
} from 'react-native';
import Map from '../components/Map'
import { Text } from 'react-native-elements'
import { SafeAreaView, NavigationEvents, withNavigationFocus } from 'react-navigation'
import '../_mockLocation'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'

const TrackCreateScreen = ({ isFocused }) => {

  const { addLocation } = useContext(LocationContext)

  const [err] = useLocation(isFocused, addLocation)

  return (
  <SafeAreaView forceInset={{ top: 'always' }}>
    <Text h2>Create a Track</Text>
    <Map />
    {err ? <Text> Please enable location services</Text> : null}
    <TrackForm />
  </SafeAreaView>
  )
}

export default withNavigationFocus(TrackCreateScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
