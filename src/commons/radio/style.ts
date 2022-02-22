import {appColor} from '../../utils/appColors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: appColor.middleGray,
  },
  textStyle: {
    marginVertical: 1,
    fontSize: 17,
  },
  pressed: {
    backgroundColor: appColor.default,
  },
  pressedText: {
    color: appColor.white,
  },
});
