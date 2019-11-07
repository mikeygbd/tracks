import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Spacer from './Spacer'
import { withNavigation } from 'react-navigation'

const NavLink = ({ navigation, text, routeName }) => (
  <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Spacer>
          <Text style={styles.link}>{text}</Text>
        </Spacer>
      </TouchableOpacity>
  </View>
);

export default withNavigation(NavLink);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  link: {
    color: 'blue',
  }
});
