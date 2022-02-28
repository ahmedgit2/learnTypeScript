import {Lang} from './../../../../utils/lang';
import {StyleSheet} from 'react-native';

export const styles = (lang: Lang) => {
  return StyleSheet.create({
    headerStyle: {
      marginHorizontal: 20,
      height: 60,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: lang === 'ar' ? 'row' : 'row-reverse',
    },
    cardGridStyle: {
      marginHorizontal: 20,
      marginVertical: 10,
    },

    cardTextContainerStyle: {
      flexGrow: 1,
      alignItems: lang === 'ar' ? 'flex-end' : 'flex-start',
    },
    bidLocationContainerStyle: {
      flexGrow: 1,
      marginBottom: 15,
      marginHorizontal: 15,
      alignSelf: 'stretch',
      alignItems: lang === 'ar' ? 'flex-end' : 'flex-start',
    },
    bidDateContainerStyle: {
      flexDirection: 'row',
      alignSelf: lang === 'ar' ? 'flex-start' : 'flex-end',
      marginTop: 5,
    },
    cardContainerStyle: {
      margin: 10,
      flexGrow: 1,
      flexDirection: lang === 'ar' ? 'row' : 'row-reverse',
    },
    clientNameContainerStyle: {
      flexDirection: lang === 'ar' ? 'row' : 'row-reverse',
      flexGrow: 1,
      marginHorizontal: 10,
      marginTop: 5,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    buttonStyle: {
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
    },
  });
};
