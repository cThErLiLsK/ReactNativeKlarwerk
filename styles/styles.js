import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // A clean white background
    padding: 20, // Some space around the edges
  },
  scrollContainer: {
    flexGrow: 1, // Allows the content to grow and scroll
  },
  centerContent: {
    alignItems: 'center', // Center items horizontally
  },
  verticalSpacing: {
    marginVertical: 50, // Big space above and below
  },
  centeredContentWithMaxWidth: {
    alignItems: 'center', // Center horizontally
    maxWidth: 1024, // Don't let it get too wide on big screens
    width: '100%', // Take up the available width
    paddingHorizontal: 20, // Space on the sides
  },

  // Typography
  headingXL: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333', // Dark grey color
    lineHeight: 55,
    marginBottom: 10,
  },
  headingL: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 22,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#333333',
    lineHeight: 28,
    marginVertical: 10,
  },
  bodyText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
    marginVertical: 20,
    maxWidth: 500,
    lineHeight: 24, // Makes the lines of text easier to read
  },
  mutedText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#777777', // A lighter grey color
    marginBottom: 40,
  },

  // Buttons
  primaryButton: {
    backgroundColor: '#A1C6EA', // A nice light blue
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8, // Rounded corners
  },
  primaryButtonText: {
    color: '#FFFFFF', // White text on the button
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Footer Styles
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f0f0f0', // Light grey background for the footer
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#555555', // Darker grey for footer text
  },
  footerLink: {
    fontSize: 16,
    color: '#007BFF', // Blue color for links
    marginLeft: 15,
  },
});