import React, {FC, useMemo} from 'react';
import {View} from 'react-native';
import {AppRate, AppText} from '../../../commons';
import {Client} from '../../../models';
import {selectLang} from '../../../slices';
import {styles as style} from './style';

interface Props {
  client: Client;
}

export const CardNameRate: FC<Props> = ({client}) => {
  const language = selectLang();
  const styles = useMemo(() => style(language), [language]);

  return (
    <View style={styles.clientNameContainerStyle}>
      <View style={styles.textContainerStyle}>
        <AppText numberOfLines={1}>{client.user.name}</AppText>
      </View>
      <AppRate text={client.rate} />
    </View>
  );
};
