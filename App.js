import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import LearnMore from './components/LearnMore';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactScreen from './components/ContactScreen'; 
import FurioraPrivacyPolicy from './components/FurioraPrivacyPolicy';
import { useFonts } from 'expo-font';
import { ActivityIndicator, View, Text } from 'react-native'; // Import these for the loading indicator

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['https://www.klarwerk.org', 'http://localhost:19006'],
  config: {
    screens: {
      Home: '',
      LearnMore: 'learn-more',
      Privacy: 'privacy-policy',
      Contact: 'contact', 
      ContactWithSlash: 'contact/'
    },
  },
};

function App() {
  const [fontsLoaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) {
    // Show a loading indicator if the fonts haven't loaded yet
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#A1C6EA" />
        <Text style={{ marginTop: 10, color: '#777' }}>Loading fonts...</Text>
      </View>
    );
  }

  // Once the fonts are loaded, we can show our app!
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LearnMore" component={LearnMore} options={{ title: '' }} />
        <Stack.Screen name="Privacy" component={PrivacyPolicy} options={{ title: '' }} />
        <Stack.Screen name="Contact" component={ContactScreen} options={{ title: '' }} />
        <Stack.Screen name="FurioraPrivacyPolicy" component={FurioraPrivacyPolicy} options={{ title: '' }} />
        <Stack.Screen name="ContactWithSlash" component={ContactScreen} options={{ title: '' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;