import React, {FC, useState} from 'react';
import {View} from 'react-native';
import {AppButton, AppText} from '../../commons';
import I18n from 'react-native-i18n';
import {styles} from './style';
import {Lang} from '../../utils';
import en from '../../i18n/en';
import ar from '../../i18n/ar';
import {useDispatch} from 'react-redux';
import {toggleLang} from '../../slices';

interface Props {
  lang: Lang;
}

export const LoginHeader: FC<Props> = props => {
  const [langText, setLangText] = useState<string>(
    props.lang === Lang.en ? en.currentLang : ar.currentLang,
  );
  const dispatch = useDispatch();

  return (
    <View style={styles.headerStyle}>
      <AppText style={styles.textStyle}>{langText}</AppText>
      <AppButton
        onPress={() => {
          setLangText(
            langText === ar.currentLang ? en.currentLang : ar.currentLang,
          );
          dispatch(toggleLang(langText === ar.currentLang ? Lang.en : Lang.ar));
        }}
        title="عربي / En"
        style={styles.buttonStyle}
      />
    </View>
  );
};
