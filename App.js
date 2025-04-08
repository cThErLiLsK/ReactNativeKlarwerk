import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import LearnMore from './components/LearnMore';
import PrivacyPolicy from './components/PrivacyPolicy'; // Make sure this is imported!

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LearnMore" component={LearnMore} options={{ title: '' }} />
        <Stack.Screen name="Privacy" component={PrivacyPolicy} options={{ title: '' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;