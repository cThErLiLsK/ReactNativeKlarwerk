import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/styles'; // Import the styles
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for the back button

const CustomHeader = () => {
  const navigation = useNavigation();

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
          style={styles.logo}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;
