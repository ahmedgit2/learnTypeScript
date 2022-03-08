import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {useForm} from 'react-hook-form';
import {
  NoteFormController,
  OfferFormController,
  OfferVehicleFormController,
} from '.';
import {AppButton} from '../../commons';
import {ProviderVehicles} from '../../models';
interface Props {
  onPress: (value: CreateOfferFormProps) => void;
  vehicles: ProviderVehicles[];
}
export interface CreateOfferFormProps {
  price: number;
  note: string;
  vehicle: number;
}
export enum OfferName {
  price = 'price',
  note = 'note',
  vehicle = 'vehicle',
}
export const CreateOfferForm: FC<Props> = ({onPress, vehicles}) => {
  const {control, handleSubmit} = useForm<CreateOfferFormProps>({
    mode: 'onBlur',
    defaultValues: {note: undefined, price: undefined, vehicle: undefined},
  });
  return (
    <>
      <OfferVehicleFormController
        control={control}
        name={OfferName.vehicle}
        vehicles={vehicles}
      />
      <OfferFormController control={control} name={OfferName.price} />
      <NoteFormController control={control} name={OfferName.note} />
      <AppButton onPress={handleSubmit(onPress)} title="Send" />
    </>
  );
};
