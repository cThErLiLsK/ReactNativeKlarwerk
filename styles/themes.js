// ./styles/themes.js

import { MD3LightTheme, adaptNavigationTheme } from 'react-native-paper';
import { DefaultTheme as NavigationLightTheme } from '@react-navigation/native';
import merge from 'deepmerge';

// Define the light theme colors
export const lightColors = {
  primary: '#5492B3', // Primary button and footer link color
  secondary: '#E53935', // Accent color
  background: '#FFFFFF', // Background color
  surface: '#FAFAFA', // Surface color
  text: '#333333', // Primary text color
  onPrimary: '#FFFFFF', // Text color on primary background
  border: '#E0E0E0', // Border color
  icon: '#5492B3', // Icon color
  accent: '#FF6F61', // Accent color
  bullet: '#212121', // Bullet color
  card: '#FFFFFF', // Card background color
  inputBackground: '#f0f0f0', // Input background color
  inputBorder: '#ccc', // Input border color
  inputFocusBorder: '#5492B3', // Input focus border color
};

// Adapt navigation theme to be MD3-compatible
const { LightTheme: navAdaptedLight } = adaptNavigationTheme({
  reactNavigationLight: NavigationLightTheme,
});

// Merge MD3 Paper + Navigation + custom colors
const CombinedLightTheme = merge(MD3LightTheme, navAdaptedLight);
CombinedLightTheme.colors = {
  ...CombinedLightTheme.colors,
  ...lightColors,
};

export { CombinedLightTheme };
