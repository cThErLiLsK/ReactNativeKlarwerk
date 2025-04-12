import React from 'react';
import { View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/styles'; // Import the styles
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for the back button

const CustomHeader = () => {
  const navigation = useNavigation();

  // Get the screen width
  const { width } = Dimensions.get('window');

  // Define the maximum percentage of the screen width the logo should take up
  const maxPercentage = 0.3; // 20% of the screen width

  // Calculate the logo size, capped at maxLogoSize
  const logoSize = Math.min(styles.logo.width, width * maxPercentage);

  return (
    <View style={styles.header}>
      {/* Back Button or Placeholder */}
      {navigation.canGoBack() ? (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
      ) : (
        <View style={styles.backButtonPlaceholder} />
      )}
      {/* Logo */}
      <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Home')} style={styles.logoContainer}>
        <Image
          source={require('../assets/Klarwerk_favicon_freigestellt.png')}
          style={[styles.logo, { width: logoSize }]} // Set dynamic size
          resizeMode="contain" // Ensure the image fits within the container
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;
