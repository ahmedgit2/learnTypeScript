import {View, Text} from 'react-native';
import React, {FC, useMemo} from 'react';
import {Control, Controller} from 'react-hook-form';
import {CreateOfferFormProps, OfferName, OfferTotalText} from '.';
import {AppGrid, AppInput, AppText} from '../../commons';
import {styles as style} from './styles';
import I18n from 'react-native-i18n';
import {selectLang} from '../../slices';
import {appColor} from '../../utils';
interface Props {
  control: Control<CreateOfferFormProps, any>;
  name: OfferName;
}
export const NoteFormController: FC<Props> = props => {
  const {control, name} = props;
  const language = selectLang();
  const styles = useMemo(() => style(language), [language]);
  return (
    <>
      <Controller
        control={control}
        rules={{}}
        name={name}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => {
          return (
            <>
              <AppGrid style={styles.cardGridStyle}>
                <View style={styles.noteCardHeader}>
                  <AppText
                    style={{
                      color: appColor.middleGray,
                      marginHorizontal: 10,
                    }}>
                    {I18n.t('Optional')}
                  </AppText>
                  <AppText style={{fontWeight: 'bold'}}>
                    {I18n.t('Notes')}
                  </AppText>
                </View>
                <View style={styles.cardContainerStyle}>
                  <AppInput
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    error={error?.message}
                    defaultValue={value}
                  />
                </View>
              </AppGrid>
            </>
          );
        }}
      />
    </>
  );
};
