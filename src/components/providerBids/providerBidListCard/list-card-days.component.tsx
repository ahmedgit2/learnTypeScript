import dayjs, {Dayjs} from 'dayjs';
import React, {FC, useMemo} from 'react';
import {styles as style} from './style';
import I18n from 'react-native-i18n';
import {selectLang} from '../../../slices';
import {AppText} from '../../../commons';

interface Props {
  createdAt: Date;
}

export const CardDays: FC<Props> = ({createdAt}) => {
  const days = dayjs().diff(createdAt, 'days');
  const language = selectLang();
  const styles = useMemo(() => style(language), [language]);

  return (
    <AppText style={styles.daysStyle}>
      {I18n.t('BidCardHowManyDays', {days: days})}
    </AppText>
  );
};
