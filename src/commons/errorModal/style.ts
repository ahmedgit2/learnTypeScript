import {appColor} from '../../utils/appColors';
import {StyleSheet} from 'react-native';

export const ModalStyle = StyleSheet.create({
  centeredView: {
    backgroundColor: appColor.white,
    display: 'flex',
    flexDirection: 'column',
    marginTop: '70%',
    marginHorizontal: 30,
  },
  modalView: {},
  button: {
    width: 150,
    height: 50,
  },

  modalText: {
    paddingTop: 30,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 23,
    fontWeight: 'bold',
    paddingHorizontal: 30,
    marginBottom: 20,
  },
});
