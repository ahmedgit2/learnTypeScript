import {Lang} from './../../utils/lang';
import {appColor} from '../../utils';
import {store} from '../../redux';
import {StyleSheet} from 'react-native';

export const styles = (lang: Lang) => {
  return StyleSheet.create({
    containerStyle: {
      flexDirection: lang === 'ar' ? 'row' : 'row-reverse',
      marginHorizontal: 5,
    },
    textStyle: {
      marginHorizontal: 3,
      color: appColor.rateText,
      fontSize: 14,
      alignSelf: lang === 'ar' ? 'flex-end' : 'flex-start',
    },
  });
};
