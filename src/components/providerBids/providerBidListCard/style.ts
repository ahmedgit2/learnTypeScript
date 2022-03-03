import {StyleSheet} from 'react-native';
import {appColor, Lang} from '../../../utils';

export const styles = (lang: Lang) => {
  return StyleSheet.create({
    clientNameContainerStyle: {
      flexDirection: lang === Lang.en ? 'row' : 'row-reverse',
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    textContainerStyle: {
      flexBasis: 185,
      flexGrow: 1,
      flexShrink: 0,
      alignSelf: 'stretch',
    },
    daysStyle:
      lang == Lang.ar
        ? {
            color: appColor.middleGray,
            position: 'absolute',
            bottom: 5,
            left: 5,
            fontSize: 14,
          }
        : {
            color: appColor.middleGray,
            position: 'absolute',
            bottom: 5,
            fontSize: 14,
            right: 5,
          },
    containerStyle: {
      flexDirection: 'row',
      margin: 5,
    },
    textStyle: {
      fontSize: 14,
      color: appColor.darkGray,
    },

    bidDateContainerStyle: {
      marginHorizontal: 10,
      flexDirection: 'row',
      alignSelf: lang === 'ar' ? 'flex-start' : 'flex-end',
      marginTop: 5,
    },
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
      padding: 10,
    },

    cardTextContainerStyle: {
      flexGrow: 1,
      justifyContent: 'space-between',
    },
    bidLocationContainerStyle: {
      flexGrow: 1,
      marginBottom: 15,
      marginHorizontal: 15,
      alignSelf: 'stretch',
      alignItems: lang === 'ar' ? 'flex-end' : 'flex-start',
    },

    cardContainerStyle: {
      //   margin: 10,
      flexGrow: 1,
      flexDirection: lang === Lang.en ? 'row' : 'row-reverse',
    },

    buttonStyle: {
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
    },
  });
};
