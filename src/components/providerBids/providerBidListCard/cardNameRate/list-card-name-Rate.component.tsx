import React, {FC, useMemo} from 'react';
import {View} from 'react-native';
import {AppRate, AppText} from '../../../../commons';
import {Client} from '../../../../models';
import {selectLang} from '../../../../slices';
import {styles as style} from './style';

interface Props {
  client: Client;
}

export const CardNameRate: FC<Props> = ({client}) => {
  const language = selectLang();
  const styles = useMemo(() => style(language), [language]);

  return (
    <View style={styles.clientNameContainerStyle}>
      <AppRate text={client.rate} />
      <AppText>{client.user.name}</AppText>
    </View>
  );
};
