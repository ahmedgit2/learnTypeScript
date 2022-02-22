import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
    alignItems: 'flex-end',
  },
  bidDetailsContainerStyle: {
    flexGrow: 1,
    marginRight: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContainerStyle: {
    margin: 12,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  clientNameContainerStyle: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginHorizontal: 10,
    marginTop: 8,
  },
});
