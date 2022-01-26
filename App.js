import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Discover from './components/Discover';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header profileImage={require('./assets/person.jpg')} />
      <Discover />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
