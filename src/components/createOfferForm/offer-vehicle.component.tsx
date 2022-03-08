import {View, Text} from 'react-native';
import React, {FC, useMemo} from 'react';
import {Control, Controller} from 'react-hook-form';
import {CreateOfferFormProps, OfferName} from '.';
import {AppGrid, AppInput, AppText} from '../../commons';
import {styles as style} from './styles';
import I18n from 'react-native-i18n';
import {selectLang} from '../../slices';
import {VehiclesSelect} from '..';
import {ProviderVehicles} from '../../models';
interface Props {
  control: Control<CreateOfferFormProps, any>;
  name: OfferName;
  vehicles: ProviderVehicles[];
}
export const OfferVehicleFormController: FC<Props> = props => {
  const {control, name, vehicles} = props;
  const language = selectLang();
  const styles = useMemo(() => style(language), [language]);
  return (
    <>
      <Controller
        control={control}
        rules={{required: I18n.t('vehicleError')}}
        name={name}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => {
          return (
            <>
              <AppGrid style={styles.cardGridStyle}>
                <View style={styles.cardContainerStyle}>
                  <View style={styles.clientNameContainerStyle}>
                    <View style={styles.vehivlesContainerStyle}>
                      <AppText style={{fontWeight: 'bold'}}>
                        {I18n.t('theVehicle')}
                      </AppText>

                      <VehiclesSelect
                        onBlur={onBlur}
                        value={value}
                        onChange={onChange}
                        data={vehicles}
                      />
                    </View>
                  </View>
                </View>
                {error?.message && (
                  <AppText style={styles.errorText}>{error.message}</AppText>
                )}
              </AppGrid>
            </>
          );
        }}
      />
    </>
  );
};
