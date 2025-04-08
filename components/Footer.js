import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/styles'; // Import your styles

function Footer() {
  const navigation = useNavigation();

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Privacy')} style={styles.footerLinkTouchable}>
        <Text style={styles.footerLink}>Privacy Policy</Text>
      </TouchableOpacity>
      <Text style={styles.footerSeparator}> | </Text> {/* Just a little separator */}
      <TouchableOpacity onPress={() => navigation.navigate('Contact')} style={styles.footerLinkTouchable}>
        <Text style={styles.footerLink}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
}

// Let's add a simple style for the TouchableOpacity in your styles.js
styles.footerLinkTouchable = {
  marginHorizontal: 10, // Adding some horizontal space around each link
};

// Let's also make sure the separator has some margin
styles.footerSeparator = {
  fontSize: 16,
  color: '#777',
  marginHorizontal: 5, // Slightly less margin for the separator
};

export default Footer;