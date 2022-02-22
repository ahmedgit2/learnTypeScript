import React, {FC, useState} from 'react';
import {Modal} from 'react-native';
import {AppButton, AppGrid, AppText} from '..';

import {ModalStyle} from './style';

interface Props {
  style?: object;
  error: string;
  visible: boolean;
  onClose: () => void;
}

export const AppErrorModal: FC<Props> = props => {
  return (
    <Modal
      transparent={true}
      animationType={'slide'}
      onDismiss={props.onClose}
      onRequestClose={props.onClose}
      visible={props.visible}>
      <AppGrid style={ModalStyle.centeredView}>
        <AppText style={ModalStyle.modalText}>{props.error}</AppText>
        <AppButton
          touchableOpacity
          title={'متابعة'}
          style={ModalStyle.button}
          onPress={props.onClose}
        />
      </AppGrid>
    </Modal>
  );
};
