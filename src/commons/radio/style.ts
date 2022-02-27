import {appColor} from '../../utils/appColors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 1,
    marginHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    paddingHorizontal: 7,
    borderWidth: 1,
    borderColor: appColor.middleGray,
  },
  textStyle: {
    marginVertical: 1,
    fontSize: 16,
  },
  pressed: {
    backgroundColor: appColor.default,
  },
  pressedText: {
    color: appColor.white,
    fontWeight: 'bold',
  },
});
