import {appColor} from './../../../../utils';
import {StyleSheet} from 'react-native';
import {Lang} from '../../../../utils';

export const styles = (lang: Lang) => {
  return StyleSheet.create({
    daysStyle:
      lang == Lang.ar
        ? {
            color: appColor.middleGray,
            position: 'absolute',
            bottom: 20,
            right: 100,
          }
        : {
            color: appColor.middleGray,
            position: 'absolute',
            bottom: 20,
            left: 80,
          },
  });
};
