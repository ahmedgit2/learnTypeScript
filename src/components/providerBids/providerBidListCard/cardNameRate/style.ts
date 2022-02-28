import {StyleSheet} from 'react-native';
import {Lang} from '../../../../utils';

export const styles = (lang: Lang) => {
  return StyleSheet.create({
    clientNameContainerStyle: {
      flexDirection: lang === 'ar' ? 'row' : 'row-reverse',
      flexGrow: 1,
      marginHorizontal: 10,
      marginTop: 5,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
  });
};
