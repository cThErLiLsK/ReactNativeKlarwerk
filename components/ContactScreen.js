import React, { useState } from 'react';
import { View, Text, ScrollView, Modal, StyleSheet, Image, TouchableOpacity, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from '../styles/styles';
import Footer from '../components/Footer';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { TextInput as PaperInput, Button as PaperButton } from 'react-native-paper';

function ContactScreen() {
  const navigation = useNavigation();

  const { width } = Dimensions.get('window');
  const maxPercentage = 0.3;
  const logoPageSize = Math.min(240, width * maxPercentage);

  const [fontsLoaded] = useFonts({
    OpenSans: require('../assets/fonts/OpenSans-Regular.ttf'),
    Montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
  });

  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSendEmail = async () => {
    if (!email || !subject || !message) {
      showModal('Oops!', 'Please fill out all the fields.');
      return;
    }

    if (!isValidEmail(email)) {
      showModal('Oops!', 'Please enter a valid email address.');
      return;
    }

    setIsSending(true);

    const apiEndpoint = 'https://tb5l6q2c5f.execute-api.eu-central-1.amazonaws.com/dev/klarwerk-contact';

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, subject, message }),
      });

      if (response.ok) {
        showModal('Success', 'Your message has been sent successfully.');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        showModal('Error', 'Failed to send the message. Please try again later.');
      }
    } catch (error) {
      showModal('Error', 'There was a problem sending your message. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const showModal = (title, message) => {
    setModalMessage(`${title}: ${message}`);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading fonts...</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          paddingVertical: 50,
          paddingBottom: 100, // Add padding to ensure content is scrollable
        }}
      >
        <View style={[styles.centeredContentWithMaxWidth]}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Home')}>
              <Image
                source={require('../assets/Klarwerk_favicon_freigestellt.png')}
                style={{ width: logoPageSize, height: logoPageSize, marginRight: 10 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('LearnMore')}>
              <Image
                source={require('../assets/AngerManagement_AppIcon_v11_20250330_freigestellt.png')}
                style={{ width: logoPageSize, height: logoPageSize }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
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
            numberOfLines={5} // Ensure at least 5 lines are visible
            style={{ width: '100%', marginBottom: 20, backgroundColor: 'white', minHeight: 120 }} // Ensure minimum height
            error={!message && message !== ''}
            selectionColor="#5492B3"
          />

          <PaperButton
            mode="contained"
            onPress={handleSendEmail}
            style={{ marginTop: 20 }} // Ensure the button is visible
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </PaperButton>
        </View>
      </ScrollView>
      <Footer />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={hideModal}
      >
        <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
            <Text style={modalStyles.modalText}>{modalMessage}</Text>
            <PaperButton mode="contained" onPress={hideModal} style={modalStyles.modalButton}>
              OK
            </PaperButton>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}

const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalButton: {
    marginTop: 10,
  },
});

export default ContactScreen;
