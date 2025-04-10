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
    fontFamily: 'OpenSans',
  },
  subHeading: {
    fontSize: 22,
    fontStyle: 'italic',
    textAlign: 'center',
    color: lightColors.text,
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
    color: lightColors.text,
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
    backgroundColor: lightColors.surface,
    borderTopWidth: 1,
    borderTopColor: lightColors.border,
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

  // Custom Header Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: lightColors.background,
  },
  backButton: {
    padding: 10,
  },
  logoContainer: {
    padding: 10,
  },
  logo: {
    width: 300,
    height: 70,
    resizeMode: 'contain',
  },
});

// Markdown Styles
export const markdownStyles = StyleSheet.create({
  heading1: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 40,
    color: lightColors.text,
    fontFamily: 'OpenSans',
  },
  heading2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: lightColors.text,
    fontFamily: 'OpenSans',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    color: lightColors.text,
    fontFamily: 'OpenSans',
  },
  list_item: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 20,
    marginBottom: 5,
    color: lightColors.text,
    fontFamily: 'OpenSans',
  },
  hr: {
    borderBottomWidth: 1,
    borderColor: lightColors.border,
    marginVertical: 15,
  },
  strong: {
    fontWeight: 'bold',
    color: lightColors.text,
    fontFamily: 'OpenSans',
  },
});
