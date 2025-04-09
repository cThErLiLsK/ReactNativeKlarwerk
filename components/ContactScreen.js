import React, { useState } from 'react';
import { View, Text, Alert, ScrollView } from 'react-native';
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
  const [isSending, setIsSending] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSendEmail = async () => {
    if (!email || !subject || !message) {
      Alert.alert('Oops!', 'Please fill out all the fields.', [{ text: 'OK' }]);
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('Oops!', 'Please enter a valid email address.', [{ text: 'OK' }]);
      return;
    }

    setIsSending(true);

    const apiEndpoint = 'https://rclbvo52qf.execute-api.eu-central-1.amazonaws.com/dev/klarwerk-contact';

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, subject, message }),
      });

      if (response.ok) {
        Alert.alert('Success', 'Your message has been sent successfully.', [{ text: 'OK' }]);
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        Alert.alert('Error', 'Failed to send the message. Please try again later.', [{ text: 'OK' }]);
      }
    } catch (error) {
      Alert.alert('Error', 'There was a problem sending your message. Please try again.', [{ text: 'OK' }]);
    } finally {
      setIsSending(false);
    }
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
            alignItems: 'center',
            paddingVertical: 50,
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
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </PaperButton>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

export default ContactScreen;
