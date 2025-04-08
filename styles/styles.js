import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  centerContent: {
    alignItems: 'center',
  },
  verticalSpacing: {
    marginVertical: 50,
  },
  centeredContentWithMaxWidth: {
    alignItems: 'center',
    maxWidth: 1024,
    width: '100%',
    paddingHorizontal: 20,
  },

  // Typography
  headingXL: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    lineHeight: 55,
    marginBottom: 10,
    fontFamily: 'Montserrat', // Use Montserrat for big headings
  },
  headingL: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
    fontFamily: 'Montserrat', // Use Montserrat for large headings
  },
  subHeading: {
    fontSize: 22,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#555555',
    lineHeight: 28,
    marginVertical: 10,
    fontFamily: 'OpenSans', // OpenSans used for subheading
  },
  bodyText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
    marginVertical: 20,
    maxWidth: 500,
    lineHeight: 24,
    fontFamily: 'OpenSans',
  },
  mutedText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555555',
    marginBottom: 40,
    fontFamily: 'OpenSans',
  },

  // Buttons
  primaryButton: {
    backgroundColor: '#5492B3',
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'OpenSans', // Consistent use of OpenSans
  },

  // Footer
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
    backgroundColor: '#f0f0f0',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerLink: {
    fontSize: 16,
    color: '#5492B3',
    fontFamily: 'OpenSans',
  },

  // Input Styles
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#f0f0f0', // Light gray background for inputs
    fontFamily: 'OpenSans',
  },

  multilineInput: {
    minHeight: 80,
    textAlignVertical: 'top',
    backgroundColor: '#f0f0f0', // Same gray background for multiline
    fontFamily: 'OpenSans',
  },

  focusedInput: {
    borderColor: '#5492B3', // Footer link blue
    borderWidth: 2,
},
});
