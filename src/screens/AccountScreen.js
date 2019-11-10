import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import {Context as AuthContext} from '../context/AuthContext'

const AccountScreen = ({}) => {

  const {signout} = useContext(AuthContext)

  return (
  <>
    <Text style={{fontSize: 48}}>I'm AccountScreen</Text>
    <Spacer>
    <Button title="Sign Out" onPress={signout} />
    </Spacer>
  </>
  );
}
export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
