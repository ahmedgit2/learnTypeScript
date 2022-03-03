import {GeneralScreen, SpecificScreen} from '../screens';
import {FC} from 'react';

export type TopTapsParamList = {
  general: undefined;
  specific: undefined;
};
export interface TopTapsScreen {
  name: keyof TopTapsParamList;
  component: FC<any>;
}

export const rootTopTapsScreens: TopTapsScreen[] = [
  {name: 'general', component: GeneralScreen},
  {name: 'specific', component: SpecificScreen},
];
