import {View, Text} from 'react-native';
import React, {FC, useMemo} from 'react';
import {Control, Controller} from 'react-hook-form';
import {CreateOfferFormProps, OfferName, OfferTotalText} from '.';
import {AppGrid, AppInput} from '../../commons';
import {styles as style} from './styles';
import I18n from 'react-native-i18n';
import {selectLang} from '../../slices';
interface Props {
  control: Control<CreateOfferFormProps, any>;
  name: OfferName;
}
export const OfferFormController: FC<Props> = props => {
  const {control, name} = props;
  const language = selectLang();
  const styles = useMemo(() => style(language), [language]);
  return (
    <>
      <Controller
        control={control}
        rules={{required: I18n.t('priceError')}}
        name={name}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => {
          return (
            <>
              <AppGrid style={styles.cardGridStyle}>
                <View style={styles.cardContainerStyle}>
                  <AppInput
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    error={error?.message}
                    placeholder={I18n.t('offer') + ' *'}
                    keyboardType="numeric"
                    defaultValue={value}
                  />
                </View>
                <OfferTotalText />
              </AppGrid>
            </>
          );
        }}
      />
    </>
  );
};
