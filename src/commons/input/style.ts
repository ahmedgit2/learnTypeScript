import {appColor} from '../../utils/appColors';
import {StyleSheet} from 'react-native';
import {store} from '../../store';

const lang = store.getState().lang.value;

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
    // flexGrow: 1,
    // marginTop: 5,
  },
  inputContainer: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: appColor.white,
  },
  errorText: {
    fontSize: 16,
    textAlign: lang === 'ar' ? 'right' : 'left',
    marginHorizontal: 20,
    color: appColor.errorText,
    fontWeight: '400',
    marginTop: 4,
  },

  logo:
    lang === 'ar'
      ? {
          position: 'absolute',
          right: 32,
        }
      : {
          position: 'absolute',
          left: 32,
        },
  input: {
    backgroundColor: appColor.input,
    borderRadius: 5,
    elevation: 2,
    fontSize: 16,
    textAlign: lang === 'ar' ? 'right' : 'left',
    marginHorizontal: 10,
    flex: 1,
    paddingHorizontal: 10,
  },
  inputLogo:
    lang === 'ar'
      ? {
          borderRadius: 5,
          backgroundColor: appColor.input,
          elevation: 2,
          fontSize: 16,
          textAlign: 'right',
          marginHorizontal: 10,
          flex: 1,
          paddingRight: 50,
        }
      : {
          borderRadius: 5,
          backgroundColor: '#f1f1f1',
          elevation: 2,
          fontSize: 16,
          textAlign: 'left',
          marginHorizontal: 10,
          flex: 1,
          paddingLeft: 50,
        },
});
