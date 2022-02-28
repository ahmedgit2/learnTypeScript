import {StyleSheet} from 'react-native';
import {appColor, Lang} from '../../../../utils';

export const styles = (lang: Lang) => {
  return StyleSheet.create({
    containerStyle: {
      flexDirection: 'row',
      marginHorizontal: 10,
      margin: 5,
    },
    textStyle: {
      marginHorizontal: 5,
      fontSize: 16,
      color: appColor.darkGray,
    },

    bidDateContainerStyle: {
      flexDirection: 'row',
      alignSelf: lang === 'ar' ? 'flex-start' : 'flex-end',
      marginTop: 5,
    },
  });
};
