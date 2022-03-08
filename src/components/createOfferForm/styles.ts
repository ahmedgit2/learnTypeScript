import {Lang} from './../../utils';
import {appColor} from './../../utils';
import {StyleSheet} from 'react-native';

export const styles = (lang: Lang) => {
  return StyleSheet.create({
    errorText: {
      fontSize: 16,
      textAlign: lang === 'ar' ? 'right' : 'left',
      marginHorizontal: 20,
      color: appColor.errorText,
      fontWeight: '400',
      paddingHorizontal: 10,
      marginBottom: 10,
    },

    headerStyle: {
      marginVertical: 0,
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
    },
    vehivlesSelectStyle: {
      flexWrap: 'wrap',
      flexDirection: lang == Lang.ar ? 'row' : 'row-reverse',
      justifyContent: 'flex-end',
      //   marginTop: 10,
      padding: 3,
    },

    inputCardText: {
      flexDirection: 'row',
      flexGrow: 1,
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    inputCard: {
      marginBottom: 15,
      marginHorizontal: 25,
      flexGrow: 1,
    },
    cardGridStyle: {
      marginHorizontal: 20,
      marginVertical: 10,
      flexGrow: 1,
    },

    backButtonStyle: {
      position: 'absolute',
      right: 15,
    },

    cardTextContainerStyle: {
      flexGrow: 1,
    },
    bidLocationContainerStyle: {
      flexGrow: 1,
      marginRight: 20,
      alignSelf: 'stretch',
      alignItems: 'flex-end',
    },
    bidDetailsContainerStyle: {
      flexGrow: 1,
      marginRight: 20,
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
    },
    bidStatusStyle: {
      color: '#FE994A',
      fontSize: 14,
      backgroundColor: '#E2E2E2',
      borderRadius: 8,
      marginHorizontal: 10,
      alignSelf: 'flex-start',
      justifyContent: 'space-around',
      paddingHorizontal: 10,
      paddingVertical: 1,
    },
    bidDateContainerStyle: {
      flexDirection: lang == Lang.ar ? 'row' : 'row-reverse',
      justifyContent: 'space-between',
      marginTop: 5,
    },
    cardContainerStyle: {
      margin: 10,
      flexDirection: lang == Lang.ar ? 'row' : 'row-reverse',
      justifyContent: 'flex-start',
    },
    vehivlesContainerStyle: {
      flexGrow: 1,
      justifyContent: 'flex-start',
    },
    clientNameContainerStyle: {
      flexDirection: lang == Lang.ar ? 'row' : 'row-reverse',
      flexGrow: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      marginHorizontal: 10,
      marginTop: 8,
    },
    noteCardHeader: {
      flexDirection: lang == Lang.ar ? 'row' : 'row-reverse',
      flexGrow: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      paddingHorizontal: 20,
      marginTop: 8,
    },
    offerCardText: {
      flexDirection: lang == Lang.ar ? 'row' : 'row-reverse',
      marginHorizontal: 10,
      marginTop: 8,
      alignSelf: 'stretch',
      justifyContent: 'space-between',
    },
    offerCardTextContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingBottom: 10,
    },
    SendButton: {
      marginTop: 50,
    },
  });
};
