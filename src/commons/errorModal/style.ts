import {appColor} from '../../utils/appColors';
import {StyleSheet} from 'react-native';

export const ModalStyle = StyleSheet.create({
  centeredView: {
    backgroundColor: appColor.white,
    width: '85%',
    height: 'auto',
    alignSelf: 'center',

    // top: '50%',
    // left: '50%',
    flexGrow: 0,
  },
  button: {
    width: 150,
    height: 50,
    alignSelf: 'center',
  },

  modalText: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 23,
    alignSelf: 'center',
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});
