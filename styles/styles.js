import { StyleSheet } from 'react-native';
import { lightColors } from './themes';

export const styles = StyleSheet.create({
  // Layout
  container: {
    flex: 1,
    backgroundColor: lightColors.background,
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
    color: lightColors.text,
    lineHeight: 55,
    marginBottom: 10,
    fontFamily: 'Montserrat',
  },
  headingL: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: lightColors.text,
    marginBottom: 20,
    fontFamily: 'Montserrat',
  },
  subHeading: {
    fontSize: 22,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#555555',
    lineHeight: 28,
    marginVertical: 10,
    fontFamily: 'OpenSans',
  },
  bodyText: {
    fontSize: 16,
    textAlign: 'center',
    color: lightColors.text,
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
    backgroundColor: lightColors.primary,
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  primaryButtonText: {
    color: lightColors.onPrimary,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'OpenSans',
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
    color: lightColors.primary,
    fontFamily: 'OpenSans',
  },

  // Input Styles
  input: {
    height: 40,
    borderColor: lightColors.inputBorder,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: lightColors.inputBackground,
    fontFamily: 'OpenSans',
  },

  multilineInput: {
    minHeight: 80,
    textAlignVertical: 'top',
    backgroundColor: lightColors.inputBackground,
    fontFamily: 'OpenSans',
  },

  focusedInput: {
    borderColor: lightColors.inputFocusBorder,
    borderWidth: 2,
  },
});
