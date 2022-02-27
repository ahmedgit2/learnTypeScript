import React, {FC, useMemo} from 'react';
import {AppGrid} from '../../../commons';
import {Bid} from '../../../models';
import {styles as style} from './style';
import {selectLang} from '../../../redux';
import dayjs from 'dayjs';
import {Text} from 'react-native';

interface Props {
  data: Bid;
  onPress: () => void;
}

export const ProviderBidsCard: FC<Props> = ({data, onPress}) => {
  const {createdAt, pickUpCity, dropOffCity} = data;
  const language = selectLang;
  const styles = useMemo(() => style(language), [language]);

  const createDate = dayjs(createdAt).format('DD/MM/YYYY hh:mm A');
  const days = dayjs().diff('2021-10-12T07:20:14.330Z', 'days');

  //   const pickUpCity = `${props.date.pickUpCity.name} - ${props.date.pickUpCity.governorate.name}`;
  //   const dropOffCity = `${props.date.dropOffCity.name} -${props.date.dropOffCity.governorate.name}`;
};
