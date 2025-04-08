import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Paragraph, Title } from 'react-native-paper';
import { styles } from '../styles/styles';
import Footer from '../components/Footer'; 

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={[styles.scrollContainer, styles.container, { justifyContent: 'center' }]}
      >
        <View style={[styles.centerContent, styles.verticalSpacing]}>
          <Title style={[styles.headingXL, { fontFamily: 'Montserrat' }]}>
            Klarwerk
          </Title>
          <Paragraph style={[styles.subHeading, { fontFamily: 'OpenSans' }]}>
            Clarity Through Reflection and Data
          </Paragraph>
          <Paragraph style={[styles.bodyText, { fontFamily: 'OpenSans' }]}>
            We design applications that help people better understand themselves — grounded in reflection and data, and supported by modern AI technology.
          </Paragraph>
          <Button
            mode="contained"
            style={styles.primaryButton}
            onPress={() => {
              navigation.navigate('LearnMore');
            }}
          >
            Learn More
          </Button>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}