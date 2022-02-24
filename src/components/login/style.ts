import {StyleSheet} from 'react-native';
import {appColor} from '../../utils';

export const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    elevation: 5,
    backgroundColor: '#FAF9F6',
    margin: 10,
    borderRadius: 5,
    height: 55,
  },
  buttonStyle: {
    height: 40,
    top: 27,
    alignSelf: 'flex-end',
    width: 100,
  },
  textStyle: {
    marginLeft: 15,
    fontSize: 17,
    color: appColor.darkGray,
    alignSelf: 'flex-start',
  },
});
