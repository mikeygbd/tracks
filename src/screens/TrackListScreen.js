import React, { useContext } from 'react';
import {
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {NavigationEvents} from 'react-navigation'
import {Context as TrackContext} from '../context/TrackContext'
import { ListItem } from 'react-native-elements'

const TrackListScreen = ({ navigation }) => {

  const { state, fetchTracks } = useContext(TrackContext)
  console.log(state);
  return (
  <>
    <NavigationEvents onWillFocus={fetchTracks} />
    <FlatList
    data={state}
    keyExtractor={item => item._id}
    renderItem={({ item })=> {
      return <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
        <ListItem chevron title={item.name} />
      </TouchableOpacity>
    }}
    />

  </>
  );
}

TrackListScreen.navigationOptions = {
  title: 'Tracks'
}

export default TrackListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
