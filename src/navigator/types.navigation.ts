import {GeneralScreen, SpecificScreen} from '../screens';
import {FC} from 'react';
import {BidsDetails} from '../models';
import {
  DetailsScreen,
  SendBidScreen,
  HomeScreen,
  LoginScreen,
} from '../screens';

export type RootStackParamList = {
  home: undefined;
  login: undefined;
  detailsScreen: {bidId: number};
  sendOffer: {details: BidsDetails};
};
export interface Screen {
  name: keyof RootStackParamList;
  component: FC<any>;
}

export const rootMainStackScreens: Screen[] = [
  {name: 'home', component: HomeScreen},
  {name: 'login', component: LoginScreen},
  {name: 'detailsScreen', component: DetailsScreen},
  {name: 'sendOffer', component: SendBidScreen},
];
