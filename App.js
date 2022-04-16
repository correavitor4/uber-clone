import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
// import DestinationSearch from './screens/DestinationSearch';
import HomeMap from './components/HomeMap'
import SearchResults from './screens/SearchResults';
import DestinationSearch from "./screens/DestinationSearch"

export default function App() {
  return (
    <HomeScreen/>
    // <SearchResults/>
    // <DestinationSearch/>
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
