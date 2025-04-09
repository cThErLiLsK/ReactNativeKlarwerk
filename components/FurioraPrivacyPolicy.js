import React from 'react';
import { ScrollView, StyleSheet, View, SafeAreaView } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { styles } from '../styles/styles';
import Footer from '../components/Footer';

const FurioraPrivacyPolicy = () => {
  const privacyText = `
# Privacy Policy for Furiora App

We respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we handle any information you provide while using our app and website, in accordance with the General Data Protection Regulation (GDPR), an EU regulation.

---

## 1. Data Collection

We do not collect any personal data unless you choose to provide it voluntarily via the app or our contact form.

In the Furiora app, you can enter and store anger-related events, chat messages, and journal entries. This information may include sensitive emotional data that you choose to provide.

---

## 2. Use of Personal Data

Your data is used solely to:

- Provide features within the app (e.g., journaling, summaries, reflection tools)
- Generate meaningful feedback and emotional insights using artificial intelligence
- Improve the user experience based on your interaction history

Text input (such as anger event descriptions and chat messages) is processed using **large language models (LLMs)** provided by **third-party model providers** via **AWS Bedrock**.

We do **not** sell or share your data for advertising or marketing purposes.

---

## 3. Data Storage & Security

- Your data is **transmitted securely** using **TLS encryption**
- Data is **encrypted at rest** on our servers and your device

All data is stored on secure infrastructure provided by **Amazon Web Services (AWS)**.

---

## 4. Third-party Services

We rely on the following third-party services:

- **Amazon Web Services (AWS)** for hosting, cloud storage, and networking
- **AWS Bedrock** to access **third-party LLMs** for analyzing text input and generating AI responses

These providers do not use your data for their own purposes and are contractually bound to strict data privacy agreements. However, their own terms and conditions may apply.

---

## 5. Your Rights

Under the GDPR, you have the right to:

- Access your stored personal data
- Request correction or deletion of your data
- Restrict or object to certain processing of your data

To exercise these rights, please contact us directly at contact@klarwerk.org.

---

## 6. Contact

If you have any questions or concerns regarding this Privacy Policy, please contact us:

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
    fontFamily: 'Montserrat',
  },
  heading2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    fontFamily: 'Montserrat',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    fontFamily: 'OpenSans',
  },
  list_item: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 20,
    marginBottom: 5,
    fontFamily: 'OpenSans',
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

export default FurioraPrivacyPolicy;
