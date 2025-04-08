import React, { useState } from 'react';
import { View, Text, Alert, ScrollView, Linking } from 'react-native';
import { styles } from '../styles/styles';
import Footer from '../components/Footer';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { TextInput as PaperInput, Button as PaperButton } from 'react-native-paper';

function ContactScreen() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    OpenSans: require('../assets/fonts/OpenSans-Regular.ttf'),
    Montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
  });

  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSendEmail = () => {
    if (!email || !subject || !message) {
      Alert.alert('Oops!', 'Please fill out all the fields.', [{ text: 'OK' }]);
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Oops!', 'Please enter a valid email address.', [{ text: 'OK' }]);
      return;
    }

    const mailtoUrl = `mailto:contact@klarwerk.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;

    Linking.openURL(mailtoUrl)
      .catch((error) => Alert.alert('Error', 'Could not open email app.', [{ text: 'OK' }]));

    setEmail('');
    setSubject('');
    setMessage('');
  };

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading fonts...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
        <ScrollView
            contentContainerStyle={[
            styles.scrollContainer, styles.container,
            {
                alignItems: 'center', // Center all children horizontally
                paddingVertical: 50,  // Add vertical spacing
            }
            ]}
        >
            <View style={[styles.centeredContentWithMaxWidth]}>
            <Text style={[styles.headingL, { marginBottom: 30 }]}>Contact Us</Text>

            <PaperInput
                label="Your Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                mode="outlined"
                style={{ width: '100%', marginBottom: 15, backgroundColor: 'white' }}
                error={!email && email !== ''}
                selectionColor="#5492B3"
            />

            <PaperInput
                label="Subject"
                value={subject}
                onChangeText={setSubject}
                mode="outlined"
                style={{ width: '100%', marginBottom: 15, backgroundColor: 'white' }}
                error={!subject && subject !== ''}
                selectionColor="#5492B3"
            />

            <PaperInput
                label="Your Message"
                value={message}
                onChangeText={setMessage}
                mode="outlined"
                multiline={true}
                numberOfLines={4}
                style={{ width: '100%', marginBottom: 20, backgroundColor: 'white' }}
                error={!message && message !== ''}
                selectionColor="#5492B3"
            />

            <PaperButton
                mode="contained"
                onPress={handleSendEmail}
                style={styles.primaryButton}
            >
                Send Message
            </PaperButton>
            </View>
        </ScrollView>
        <Footer />
        </View>

  );
}

export default ContactScreen;