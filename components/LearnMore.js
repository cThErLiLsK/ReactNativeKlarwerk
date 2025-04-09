import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer'; // Make sure you import the Footer!

function LearnMore() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View style={[styles.scrollContainer, styles.container, { justifyContent: 'center' }]}>
        <View style={[styles.centerContent, styles.verticalSpacing]}>
          {/* The app icon! */}
          <Image
            source={require('../assets/AngerManagement_AppIcon_v11_20250330_freigestellt.png')}
            style={{ width: 240, height: 240 }} // Adjust size as needed!
          />

          {/* Our brief description */}
          <Text style={[styles.bodyText, { textAlign: 'center' }]}>
            Furiora is an anger management app designed to help you with journaling,
            reflecting on your feelings, and learning healthy ways to cope with anger.
          </Text>

          {/* Link to the contact page */}
          <Text style={{ marginTop: 20, fontSize: 12, color: '#777', textAlign: 'center' }}>
            Questions about your data and requests to delete your account? Please use contact.
          </Text>

          {/* Link to the contact page */}
          <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <Text style={[styles.footerLink, { marginTop: 10, fontSize: 16, textAlign: 'center' }]}>
              Contact
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('FurioraPrivacyPolicy')}>
            <Text style={[styles.footerLink, { marginTop: 10, fontSize: 16, textAlign: 'center' }]}>
              Furiora Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </View>
  );
}

export default LearnMore;