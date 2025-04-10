import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider, useTheme } from 'react-native-paper'; // Import PaperProvider
import HomeScreen from './components/HomeScreen';
import LearnMore from './components/LearnMore';
import PrivacyPolicy from './components/PrivacyPolicy';
import ContactScreen from './components/ContactScreen';
import FurioraPrivacyPolicy from './components/FurioraPrivacyPolicy';
import CustomHeader from './components/CustomHeader'; 
import { useFonts } from 'expo-font';
import { ActivityIndicator, View, Text } from 'react-native';
import { CombinedLightTheme } from './styles/themes'; // Import the theme

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['https://www.klarwerk.org', 'http://localhost:8001'],
  config: {
    screens: {
      Home: '',
      LearnMore: 'learn-more',
      Privacy: 'privacy-policy',
      Contact: 'contact',
      FurioraPrivacyPolicy: 'furiora-privacy-policy',
    },
  },
};

function App() {
  const [fontsLoaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={CombinedLightTheme.colors.primary} />
        <Text style={{ marginTop: 10, color: CombinedLightTheme.colors.text }}>Loading fonts...</Text>
      </View>
    );
  }

  return (
    <PaperProvider theme={CombinedLightTheme}> {/* Wrap with PaperProvider */}
      <NavigationContainer
        linking={linking}
        theme={CombinedLightTheme}
        documentTitle={{
          formatter: (options, route) =>
            `${options?.title ?? route?.name} Klarwerk`,
        }}
      >
        <Stack.Navigator initialRouteName="Home" screenOptions={{ header: () => <CustomHeader />, }}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="LearnMore" component={LearnMore} options={{ title: '' }} />
          <Stack.Screen name="Privacy" component={PrivacyPolicy} options={{ title: '' }} />
          <Stack.Screen name="Contact" component={ContactScreen} options={{ title: '' }} />
          <Stack.Screen name="FurioraPrivacyPolicy" component={FurioraPrivacyPolicy} options={{ title: '' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
