import React, {FC, useState} from 'react';
import {Modal, View} from 'react-native';
import {AppButton, AppGrid, AppText} from '..';
import I18n from 'react-native-i18n';

import {ModalStyle} from './style';

interface Props {
  error: string;
  visible: boolean;
  onClose: () => void;
}

export const AppErrorModal: FC<Props> = ({error, onClose, visible}) => {
  return (
    <Modal
      transparent={true}
      animationType={'slide'}
      onDismiss={onClose}
      onRequestClose={onClose}
      visible={visible}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <AppGrid style={ModalStyle.centeredView}>
          <AppText style={ModalStyle.modalText}>{error}</AppText>
          <AppButton
            touchableOpacity
            title={I18n.t('continue')}
            style={ModalStyle.button}
            onPress={onClose}
          />
        </AppGrid>
      </View>
    </Modal>
  );
};
