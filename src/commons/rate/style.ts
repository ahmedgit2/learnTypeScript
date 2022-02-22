import {appColor} from '../../utils';
import {store} from '../../redux';
import {StyleSheet} from 'react-native';

const lang = store.getState().lang.value;

export const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: lang === 'ar' ? 'row' : 'row-reverse',
    margin: 5,
    alignItems: 'center',
  },
  textStyle: {
    marginHorizontal: 3,
    color: appColor.rateText,
    fontSize: 14,
  },
});
