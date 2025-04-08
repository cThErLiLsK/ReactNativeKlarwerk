import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LearnMore = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Learn More screen.</Text>
      <Text style={styles.text}>Here you can add more information about your app.</Text>
      <Button
        title="Go Back to Home"
        onPress={() => navigation.goBack()}
      />
      <Button // Here's the new button!
        title="Read Privacy Policy"
        onPress={() => navigation.navigate('Privacy')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default LearnMore;