import {PixelRatio, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  welcomeTextContainer: {
    marginHorizontal: 20,
    marginBottom: 16,
  },
  bigText: {
    fontSize: 24,
    color: '#474747',
    fontWeight: 'bold',
    lineHeight: 45,
    letterSpacing: 0.15,
    textAlign: 'right',
    marginBottom: 4,
  },
  smallText: {
    fontSize: 18,
    color: '#474747',
    fontWeight: 'bold',
    lineHeight: 33,
    letterSpacing: 0.11,
    textAlign: 'right',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 79,
    marginBottom: 57.5,
  },
  logoStyle: {
    flexGrow: 1,
    height: 83,
    width: 133,
  },
  inputStyle: {
    height: 60,
    marginHorizontal: 20,
    borderRadius: 9,
    borderColor: '#ECECEC',
    borderWidth: 1,
    backgroundColor: '#f9f9f9',
    alignSelf: 'stretch',
    color: '#474747',
    paddingHorizontal: 14,
  },
});
