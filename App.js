import { StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import DetailedScreen from './screens/DetailedScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from './assets/colors';
import LikedScreen from './screens/LikedScreen'
import ProfileScreen from './screens/ProfileScreen'
import Icon from 'react-native-vector-icons/FontAwesome5';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#F35D38',
        tabBarInactiveTintColor: '#D1D3D2',
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} options={{ tabBarIcon: ({ color }) => (<Icon name='home' size={32} color={color} />) }} />
      <Tab.Screen name='Liked' component={LikedScreen} options={{ tabBarIcon: ({ color }) => (<Icon name='heart' size={32} color={color} />) }} />
      <Tab.Screen name='Profile' component={ProfileScreen} options={{ tabBarIcon: ({ color }) => (<Icon name='user' size={32} color={color} />) }} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='TabNavigator' component={TabNavigator} />
        <Stack.Screen name='Details' component={DetailedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
  },
  tabBar: {
    backgroundColor: colors.White,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 64
  }
});
