import {Lang} from './../../utils';
import {appColor} from './../../utils';
import {StyleSheet} from 'react-native';
import {store} from '../../store';

const lang = store.getState().lang.value;

export const styles = StyleSheet.create({
  daysStyle: {
    fontSize: 14,
    color: appColor.middleGray,
  },
  headerStyle: {
    marginHorizontal: 20,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardGridStyle: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexGrow: 0,
  },

  backButtonStyle: {
    position: 'absolute',
    right: 0,
  },
  cardTextContainerStyle: {
    flexGrow: 1,
  },
  bidLocationContainerStyle: {
    flexGrow: 1,
    marginRight: 20,
    alignSelf: 'stretch',
    alignItems: lang == Lang.ar ? 'flex-end' : 'flex-start',
  },
  bidDetailsContainerStyle: {
    flexGrow: 1,
    marginRight: 20,
    justifyContent: 'flex-start',
    alignItems: lang == Lang.ar ? 'flex-end' : 'flex-start',
  },
  bidStatusStyle: {
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
  },
  cardContainerStyle: {
    margin: 12,
    flexDirection: lang == Lang.ar ? 'row' : 'row-reverse',
    justifyContent: 'flex-end',
  },
  clientNameContainerStyle: {
    flexDirection: lang == Lang.ar ? 'row' : 'row-reverse',
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginHorizontal: 10,
    marginTop: 8,
  },
});
