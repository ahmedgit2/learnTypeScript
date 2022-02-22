import {appColor} from '../../utils/appColors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flexGrow: 1,
    marginBottom: 15,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    elevation: 2,
    backgroundColor: appColor.default,
    overflow: 'hidden',
    marginHorizontal: 20,
    marginVertical: 20,
    height: 60,
    paddingHorizontal: 10,
  },

  textStyle: {
    color: appColor.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
