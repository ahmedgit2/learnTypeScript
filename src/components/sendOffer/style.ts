import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerStyle: {
    marginVertical: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  vehivlesSelectStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    padding: 3,
    // backgroundColor: 'red',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  cardContainerStyle: {
    margin: 12,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  vehivlesContainerStyle: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  clientNameContainerStyle: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginHorizontal: 10,
    marginTop: 8,
  },
  notesCardText: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 8,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  notesCard: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
