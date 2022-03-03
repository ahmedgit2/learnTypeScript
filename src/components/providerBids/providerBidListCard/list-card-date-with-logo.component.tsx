import React, {FC, useMemo} from 'react';
import {Text, View} from 'react-native';
import {styles as style} from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import dayjs from 'dayjs';
import {selectLang} from '../../../slices';
import {appColor, Lang} from '../../../utils';
interface Props {
  createdAt: Date;
}

export const CardDate: FC<Props> = ({createdAt}) => {
  const language = selectLang();
  const styles = useMemo(() => style(language), [language]);

  const createDate = dayjs(createdAt).format('DD/MM/YYYY hh:mm A');

  return (
    <View style={styles.bidDateContainerStyle}>
      <View
        style={[
          styles.containerStyle,
          language === Lang.en && {flexDirection: 'row-reverse'},
        ]}>
        <Text style={styles.textStyle}>{createDate}</Text>
        <MaterialCommunityIcons
          name={'calendar-month-outline'}
          color={appColor.middleGray}
          size={18}
        />
      </View>
    </View>
  );
};
