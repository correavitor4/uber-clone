import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
// import DestinationSearch from './screens/DestinationSearch';
import HomeMap from './components/HomeMap'
import SearchResults from './screens/SearchResults';
import DestinationSearch from "./screens/DestinationSearch"
import HomeNavigator from './Navigation/Home'
import RootNavigator from './Navigation/Root';
import 'react-native-gesture-handler';
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import {withAuthenticator} from 'aws-amplify-react-native'
import React from 'react';
Amplify.configure(awsconfig)


class App extends React.Component {
  render(){
    return (
      // <HomeScreen/>
      <RootNavigator/>
      // <SearchResults/>
      // <DestinationSearch/>
    );
  }
}

export default withAuthenticator(App)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
