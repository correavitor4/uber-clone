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
import DriverScreen from './screens/DriverScreen';
import RegisterNewDriver from './screens/RegisterNewDriver';
import SelectDriverOrPassenger from './screens/SelectDriverOrPassenger';

export default function App() {
  return (
    // <HomeScreen/>
    <RootNavigator/>
    // <SearchResults/>
    // <DestinationSearch/>
    // <DriverScreen/>
    // <RegisterNewDriver/>
    // <SelectDriverOrPassenger/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});