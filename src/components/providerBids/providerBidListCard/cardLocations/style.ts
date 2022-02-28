import {StyleSheet} from 'react-native';
import {appColor, Lang} from '../../../../utils';

export const styles = (lang: Lang) => {
  return StyleSheet.create({
    bidLocationContainerStyle: {
      flexGrow: 1,
      marginBottom: 15,
      marginHorizontal: 15,
      alignSelf: 'stretch',
      alignItems: lang === 'ar' ? 'flex-end' : 'flex-start',
    },
  });
};
