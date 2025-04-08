import React from 'react';
import { ScrollView, StyleSheet, View, SafeAreaView } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { styles } from '../styles/styles';
import Footer from '../components/Footer'; 

const PrivacyPolicy = () => {
  const privacyText = `
# Privacy Policy

We respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we handle any information you provide while using our website, in accordance with the General Data Protection Regulation (GDPR).

---

## 1. Data Collection

We do not collect any personal data unless you choose to provide it voluntarily via our contact form.

---

## 2. Use of Personal Data

If you contact us through the form on our website:

- We will collect the email address and message you submit.
- This information is used solely to respond to your inquiry.
- We do not use your data for marketing purposes.
- Your data will not be shared with third parties.

---

## 3. Data Retention

Your message and contact details will be retained only as long as necessary to respond to your inquiry or as required by law.

---

## 4. Your Rights

Under the GDPR, you have the right to:

- Access the personal data we hold about you
- Request correction or deletion of your personal data
- Object to or restrict certain processing of your data

To exercise any of these rights, please contact us directly using the details provided on our website.

---

## 5. Contact

If you have any questions about this Privacy Policy or wish to request the deletion of your data, please contact us at:

**Klarwerk**
Email: contact@klarwerk.org
  `;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: styles.container.backgroundColor }}>
      <ScrollView contentContainerStyle={[styles.scrollContainer, { alignItems: 'center' }]}>
        <View style={styles.centeredContentWithMaxWidth}>
          <Markdown style={markdownStyles}>{privacyText}</Markdown>
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

const markdownStyles = StyleSheet.create({
  heading1: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20, 
    marginTop: 40,
  },
  heading2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  list_item: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 20,
    marginBottom: 5,
  },
  hr: {
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    marginVertical: 15,
  },
  strong: {
    fontWeight: 'bold',
  },
});

export default PrivacyPolicy;