import React, {FC, useMemo} from 'react';
import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AppText} from '..';
import {selectLang} from '../../slices';
import {appColor, Lang} from '../../utils';
import {styles as style} from './style';

interface Props {
  style?: object;
  text: number | undefined;
  logoSize?: number;
}

export const AppRate: FC<Props> = props => {
  const language = selectLang();
  const styles = useMemo(() => style(language), [language]);

  return (
    <View style={styles.containerStyle}>
      <AppText style={[styles.textStyle, props.style]}>
        {props.text?.toString()}
      </AppText>
      <AntDesign
        name={'star'}
        color={appColor.rateStar}
        size={props.logoSize || 16}
        style={{alignSelf: 'center'}}
      />
    </View>
  );
};
