import {StyleSheet} from 'react-native';
import {store} from '../../store/store';

export const styles = lang => {
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
    },
    bidLocationContainerStyle: {
      flexGrow: 1,
      marginBottom: 15,
      marginRight: 20,
      alignSelf: 'stretch',
      alignItems: lang === 'ar' ? 'flex-end' : 'flex-start',
    },
    bidDateContainerStyle: {
      flexDirection: 'row',
      flexGrow: 1,
      alignSelf: lang === 'ar' ? 'flex-start' : 'flex-end',

      marginTop: 5,
      marginBottom: 10,
    },
    cardContainerStyle: {
      margin: 15,
      flexGrow: 1,
      flexDirection: lang === 'ar' ? 'row' : 'row-reverse',
      justifyContent: 'flex-end',
    },
    clientNameContainerStyle: {
      flexDirection: lang === 'ar' ? 'row' : 'row-reverse',
      flexGrow: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginHorizontal: 10,
      marginTop: 10,
    },
    buttonStyle: {
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
    },
  });
};
